// 1. SETUP EXPRESS
const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');

// 1a. create the app
const app = express();

// 1b setup our view engine (aka template engine)
// tell Express that we are using hbs
app.set('view engine', 'hbs');

// 1c setup wax-on
wax.on(hbs.handlebars);

// 1d tell wax-on where to find the layout files
wax.setLayoutPath("./views/layouts");

// 1e use static files (i.e, images, css, js etc. -- that is, all content not generated
// by our routes)
app.use(express.static('public'));

// Mock database
let postings = [
    {
      id: 4001,
      title: "Old boardgame for sales",
      price: 11.50,
      payments: ["cod", "paynow"],
      type: "entertainment"
    },
    {
      id: 4002,
      title: "Second hand clothings",
      price: 25.00,
      payments: ["paynow"],
      type: "clothings"
    },
    {
      id: 4003,
      title: "Old LED TV",
      price: 250.00,
      payments: ["cod"],
      type: "electronic"
    }
]

// 2. CREATE ROUTES
app.get('/', function(req,res){
    // 2nd argument of res.render takes an object
    // the keys in that object will be variables
    // in the .hbs file
    res.render("index", {
        "postings": postings
    });
})

// 3. START SERVER (No routers after you've started server)
app.listen(3000, function(){
    console.log("Server has started");
})