
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use('/', require('./src/routes/index'));
app.use('/products', require('./src/routes/products'));
app.use('/cart', require('./src/routes/cart'));
app.use('/orders', require('./src/routes/orders'));
app.use('/auth', require('./src/routes/auth'));

app.listen(process.env.PORT, () => {
    console.log("Server running at http://localhost:" + process.env.PORT);
});
