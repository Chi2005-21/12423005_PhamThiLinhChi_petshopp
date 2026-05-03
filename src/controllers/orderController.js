
const Order = require('../models/Order');

exports.checkout = (req,res)=>{
    const cart = req.session.cart||[];
    let total=0;
    cart.forEach(i=>total+=i.price*i.quantity);
    res.render('checkout',{cart,total});
};

exports.place = async (req,res)=>{
    const cart = req.session.cart;
    let total=0;
    cart.forEach(i=>total+=i.price*i.quantity);

    const id = await Order.create(req.session.user.customer_id,total);

    for(const i of cart){
        await Order.addItem(id,'pet',i.id,i.quantity,i.price);
    }

    req.session.cart=[];
    res.redirect('/');
};
