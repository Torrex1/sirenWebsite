import db from "../database/db.js"

class OrderController {
    async createOrder (req, res) {
        const { customer_id, product_id, status, total_price, shipping_address } = req.body;

        const order = await db.query('INSERT INTO orders (customer_id, product_id, status, total_price, shipping_address) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [ customer_id, product_id, status, total_price, shipping_address ]
        )

        res.json(order.rows[0]);
    }

    async getUserOrders (req, res) {
        const id = req.query.id;
        const order = await db.query('SELECT * FROM orders WHERE customer_id = $1', [id]);

        res.json(order.rows);
    }

    async updateOrder (req, res) {
        const { status, shipping_address } = req.body;

        const order = await db.query('UPDATE orders set status = $1, shipping_address = $2 WHERE id = $3', 
            [status, shipping_address, req.params.id]
        );

        res.json(order.rows[0]);       
    }

    async deleteOrder (req, res) {
        const order = await db.query('DELETE from orders where id = $1', 
            [req.params.id]
        );

        res.json('Order deleted');
    }
}

export default new OrderController();