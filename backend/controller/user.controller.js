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
            .cookie('refreshToken', tokens.refresh_token, { httpOnly: true })
            .json({ user: user.rows[0], access_token: tokens.refresh_token});

    }

    async login (req, res) {

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
}

export default new UserController();