var express = require("express");
var models  = require('../models');
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
 models.Burger.findAll({
 }).then(function(burgers) {  
   res.render("index", {
         burgers: burgers
     });
   });
 });


router.post("/", function(req, res) {
  models.Burger.create({
    burger_name: req.body.burger_name
  }).then( function(burgers){
    res.redirect("/")
  });
});  

router.put("/devoured/:id", function(req, res) {
  models.Burger.update({
    devoured: true
  }, {
    where: {id: req.params.id}
  }).then( function(burgers){
    res.redirect("/")
  });
});

router.put("/eaten/:id", function(req, res) {
  models.Burger.update({
    devoured: false
  }, {
    where: {id: req.params.id}
  }).then( function(burgers){
    res.redirect("/")
  });
});
// Export routes for server.js to use.
module.exports = router;