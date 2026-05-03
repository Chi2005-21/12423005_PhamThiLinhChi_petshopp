
const r=require('express').Router();
r.get('/',(req,res)=>res.render('index'));
module.exports=r;
