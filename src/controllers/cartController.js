
exports.getCart = (req,res)=>{
    const cart = req.session.cart || [];
    let total = 0;
    cart.forEach(i=> total+=i.price*i.quantity);
    res.render('cart',{cart,total});
};

exports.add = async (req,res)=>{
    const Pet = require('../models/Pet');
    const p = await Pet.getById(req.params.id);

    const cart = req.session.cart || [];
    const idx = cart.findIndex(i=>i.id==p.pet_id);

    if(idx>=0) cart[idx].quantity++;
    else cart.push({id:p.pet_id,name:p.name,price:p.price,quantity:1});

    req.session.cart = cart;
    res.redirect('/cart');
};
