
const db = require('../config/db');

class Order {
    static async create(customer_id,total){
        const [r] = await db.query('INSERT INTO orders(customer_id,total) VALUES(?,?)',[customer_id,total]);
        return r.insertId;
    }
    static async addItem(order_id,type,id,qty,price){
        await db.query('INSERT INTO order_items(order_id,item_type,item_id,quantity,price) VALUES(?,?,?,?,?)',
        [order_id,type,id,qty,price]);
    }
}
module.exports = Order;
