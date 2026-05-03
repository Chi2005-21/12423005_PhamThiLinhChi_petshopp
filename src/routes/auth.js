
const r=require('express').Router();
const c=require('../controllers/authController');

r.get('/login',c.loginPage);
r.post('/login',c.login);
r.get('/register',c.registerPage);
r.post('/register',c.register);

module.exports=r;
