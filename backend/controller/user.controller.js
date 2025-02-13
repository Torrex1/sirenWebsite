import db from "../database/db.js";
import bcrypt from 'bcrypt';

import tokenService from '../utils/jwt.js'

class UserController {
    async registration (req, res) {
        const {username, email, password} = req.body;

        const candidate = await db.query('SELECT email FROM users WHERE email = $1',
            [email]
        )

        if (candidate.rows.length > 0) {
            return res.status(400).json({
                message: `Пользователь с почтой ${email} уже существует!`
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const user = await db.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
            [username, email, hashPassword]
        )

        // генерация токена
        const tokens = tokenService.generateToken({id: user.rows[0].id});

        // сохранение refresh Токена в БД
        await db.query('INSERT INTO token (userId, refreshToken) VALUES($1, $2) RETURNING *',
            [user.rows[0].id, tokens.refresh_token]);

        res
            .cookie('refreshToken', tokens.refresh_token, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
            .json({ user: user.rows[0], access_token: tokens.access_token, refresh_token: tokens.refresh_token });
    }

    async login (req, res) {
        const { email, password } = req.body;

        const user = await db.query('SELECT id, email, password FROM users WHERE email = $1',
            [email]);
        if (user.rows.length === 0) {
            return res.status(400).json({message: "Пользователя с таким логином не существует"});
        }

        const isPassValid = await bcrypt.compare(password, user.rows[0].password);
        if (!isPassValid) {
            return res.status(400).json({message: "Неверный логин или пароль"});
        }

        //генерация токена
        const tokens = tokenService.generateToken({id: user.rows[0].id});

        // проверка существует токен
        const isTokenExists = await db.query('SELECT * FROM token WHERE userId = $1', [user.rows[0].id]);
        if (isTokenExists.rows.length > 0) {
            await db.query('UPDATE token SET refreshToken = $1 WHERE userId = $2', [tokens.refresh_token, user.rows[0].id]);
        } else {

            // сохранение токена в БД
            await db.query('INSERT INTO token (userId, refreshToken) VALUES($1, $2) RETURNING *',
                [user.rows[0].id, tokens.refresh_token]);
        }

        res
            .cookie('refreshToken', tokens.refresh_token, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
            .json({ user: user.rows[0], access_token: tokens.access_token, refresh_token: tokens.refresh_token });
    }

    async logout (req, res) {
        const { refreshToken } = req.cookies;

        await db.query('DELETE FROM token WHERE refreshToken = $1',
            [refreshToken]);

        res.clearCookie('refreshToken');
        return res.status(200).json({ message: "Вы успешно вышли" })
    }

    async refresh(req, res) {
        const { refreshToken } = req.cookies;

        if (!refreshToken) {
            return res.status(401).json({message: "Пользователь не авторизован!"});
        }

        //проверяем токен в БД
        const tokenData = db.query('SELECT refreshToken FROM token WHERE refreshToken = $1',[refreshToken]);
        if (tokenData.rows.length === 0) {
            return res.status(403).json({message: "Недействительный токен!"});
        }

        const userData = tokenService.validateRefreshToken(refreshToken);
        if (!userData) {
            return res.status(403).json({message: "Недействительный токен!"});
        }

        const token = tokenService.generateToken({ id: userData.id });

        await db.query('UPDATE token SET refreshToken = $1 WHERE userId = $2',[token.refresh_token, userData.id]);

        res
            .cookies('refreshToken', token.refresh_token, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
            .json({ accessToken: token.access_token });
    }

    async getUsers (req, res) {
        const users = await db.query('SELECT * from users');

        res.json(users.rows);
    }

    async getOneUser (req, res) {
        const user = await db.query('SELECT * from users WHERE id = $1', [req.params.id]);

        res.json(user.rows[0]);
    }

    async updateUser (req, res) {
        const user = await db.query('UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
            [req.body.username, req.body.email, req.body.password, req.params.id]
        )

        res.json(user.rows[0]);
    }

    async deleteUser (req, res) {
        const user = await db.query('DELETE FROM users WHERE id = $1', [req.params.id]);
        
        res.json('User deleted');
    }

    // async getAccessTokens (req, res) {
    //     const token = req.cookies.access_token;
    //     if (!token) {
    //         return null;
    //     }
    //
    //     console.log(token);
    // }

    async checkAuth(req, res) {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return res.status(401).json({ message: "Нет доступа" });
            }

            const accessToken = authHeader.split(" ")[1];
            const userData = tokenService.validateAccessToken(accessToken);
            if (!userData) {
                return res.status(401).json({ message: "Токен недействителен" });
            }

            res.json({ user: userData });
        } catch (error) {
            res.status(500).json({ message: "Ошибка авторизации" });
        }
    }
}

export default new UserController();