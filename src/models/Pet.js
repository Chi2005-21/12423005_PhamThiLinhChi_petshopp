
const db = require('../config/db');

class Pet {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM pets');
        return rows;
    }
    static async getById(id) {
        const [rows] = await db.query('SELECT * FROM pets WHERE pet_id=?',[id]);
        return rows[0];
    }
}
module.exports = Pet;
