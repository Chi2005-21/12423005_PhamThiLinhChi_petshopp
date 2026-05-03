
const Pet = require('../models/Pet');

exports.getPets = async (req,res)=>{
    const pets = await Pet.getAll();
    res.render('pets',{pets});
};

exports.getDetail = async (req,res)=>{
    const pet = await Pet.getById(req.params.id);
    res.render('pet-detail',{pet});
};
