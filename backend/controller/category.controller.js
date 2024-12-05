import db from "../database/db.js";

class CategoryController {
    async createCategory (req, res) {
        const { name } = req.body;
        const category = await db.query('INSERT INTO categories (name) VALUES ($1) RETURNING *', [name]);

        res.json(category.rows[0]);
    }

    async deleteCategory (req, res) {
        const category = await db.query('DELETE FROM categories WHERE id = $1', [req.params.id]);

        res.json('Category deleted');
    }
}

export default new CategoryController();