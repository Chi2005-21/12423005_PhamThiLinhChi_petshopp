
const db = require('../config/db');

class User {
    static async findByPhone(phone){
        const [r] = await db.query('SELECT * FROM customers WHERE phone=?',[phone]);
        return r[0];
    }
    static async create(name,phone,email,address){
        await db.query('INSERT INTO customers(name,phone,email,address) VALUES(?,?,?,?)',[name,phone,email,address]);
    }
}
module.exports = User;
