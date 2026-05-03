
const User = require('../models/User');

exports.loginPage = (req,res)=>res.render('login',{error:null});

exports.login = async (req,res)=>{
    const u = await User.findByPhone(req.body.phone);
    if(!u) return res.render('login',{error:'Not found'});
    req.session.user = u;
    res.redirect('/');
};

exports.registerPage = (req,res)=>res.render('register',{error:null});

exports.register = async (req,res)=>{
    await User.create(req.body.name,req.body.phone,req.body.email,req.body.address);
    res.redirect('/auth/login');
};
