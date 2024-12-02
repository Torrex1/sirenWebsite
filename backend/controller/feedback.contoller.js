import db from "../database/db.js";

class FeedbackController {
    async createFeedback (req, res) {
        const { rating, context, userId } = req.body;

        if (rating > 5 || rating < 1) 
            return res.status(400).json('Rating must be between 1 and 5');

        const feedback = await db.query('INSERT INTO feedback (rating, context, user_id) VALUES ($1, $2, $3) RETURNING *',
            [rating, context, userId]
        )

        res.json(feedback.rows[0]);
    }
    async getUsersFeedback (req, res) {
        const id = req.query.id;
        const feedback = await db.query('SELECT * from feedback where user_id = $1', [id]);

        res.json(feedback.rows);
    }
    async updateFeedback (req, res) {
        const feedback = await db.query('UPDATE feedback set rating = $1, context = $2 where id = $3', 
            [req.body.rating, req.body.context, req.params.id]
        )

        res.json(feedback.rows[0]);
    }
    async deleteFeedback (req, res) {
        const feedback = await db.query('DELETE from feedback where id = $1', 
            [req.params.id]
        )

        res.json('Feedback deleted');
    }
}

export default new FeedbackController();