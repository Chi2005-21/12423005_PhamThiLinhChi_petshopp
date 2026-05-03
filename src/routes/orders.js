
const r=require('express').Router();
const c=require('../controllers/orderController');
r.get('/checkout',c.checkout);
r.post('/place',c.place);
module.exports=r;
