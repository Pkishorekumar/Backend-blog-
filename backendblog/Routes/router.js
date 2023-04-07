const route = require('express').Router();
const bollywood = require('../Routes/bollywood');
const hollywood = require('.././Routes/hollywood');
const technology = require('../../backendblog/Routes/technology');
const food = require('../../backendblog/Routes/food');
const fitness = require('../../backendblog/Routes/fitness');









route.get('/bollywood',bollywood)
route.get('/hollywood',hollywood)
route.get('/technology',technology)
route.get('/food',food)
route.get('/fitness',fitness)
route.get('/hollywood',hollywood)
module.exports=route