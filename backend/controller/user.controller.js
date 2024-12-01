import db from "../database/db.js";

class UserController {
    async createUser (req, res) {
        const { username, email, password } = req.body;
        const user = await db.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
            [username, email, password]
        )

        res.json(user.rows[0]); 
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