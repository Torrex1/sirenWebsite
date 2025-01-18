import db from "../database/db.js";

class userAddressController {
    async addAddressBook (req, res) {
        const { first_name, last_name, country, city, address, zipcode, phone, user_id } = req.body;
        const NewAddress = await db.query('INSERT INTO user_address (first_name, last_name, country, city, address, zipcode, phone, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [first_name, last_name, country, city, address, zipcode, phone, user_id]);

        res.json(NewAddress.rows[0]);
    }

    async getAddress (req, res) {
        const address = await db.query('SELECT * FROM user_address');
        res.json(address.rows);
    }

    async deleteAddress (req, res) {
        const { id } = req.params;
        const address = await db.query('DELETE FROM user_address WHERE id = $1', [id]);
        res.json(address.rows[0]);
    }

    async updateAddress (req, res) {
        const { id } = req.params;
        const fields = req.body;

        if (Object.keys(fields).length === 0) {
            return res.status(400).json({
                message: 'Нет данных на обновление'
            });
        }

        const setClaus = Object.keys(fields)
            .map((key, index) => `${key} = $${index + 1}`)
            .join(', ');

        const value = Object.values(fields)

        const query = `UPDATE user_address SET ${setClaus} WHERE id = $${value.length + 1} RETURNING *`;

        const updatedAddress = await db.query(query, [...value, id]);

        res.status(200).json(updatedAddress.rows[0]);
    }
}

export default new userAddressController();