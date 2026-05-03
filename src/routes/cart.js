
const r=require('express').Router();
const c=require('../controllers/cartController');
r.get('/',c.getCart);
r.get('/add/:id',c.add);
module.exports=r;
