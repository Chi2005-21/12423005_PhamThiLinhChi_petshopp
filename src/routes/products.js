
const r=require('express').Router();
const c=require('../controllers/productController');
r.get('/pets',c.getPets);
r.get('/pet/:id',c.getDetail);
module.exports=r;
