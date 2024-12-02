import db from "../database/db.js";

class ProductController {
    async createProduct (req, res) {
        const { name, description, price, stock } = req.body;
        const product = await db.query('INSERT INTO products (name, description, price, stock) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, description, price, stock]
        )

        res.json(product.rows[0]);
    }

    async getProducts (req, res) {
        const products = await db.query('SELECT * FROM products');

        res.json(products.rows);
    }

    async getOneProduct (req, res) {
        const product = await db.query('SELECT * from products WHERE id = $1', [req.params.id]);

        res.json(product.rows[0]);
    }

    async updateProduct (req, res) {
        const { name, description, price, stock } = req.body;
        const product = await db.query('UPDATE products SET name = $1, description = $2, price = $3, stock = $4 WHERE id = $5 RETURNING *',
            [name, description, price, stock, req.params.id]);

        res.json(product.rows[0]);
    }

    async deleteProduct (req, res) {
        const product = await db.query('DELETE FROM products WHERE id = $1', [req.params.id]);
        
        res.json('Product deleted');
    }
}

export default new ProductController();