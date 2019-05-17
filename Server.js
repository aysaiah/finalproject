const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const session = require("express-session")
const port = 8080

mongoose.connect('mongodb://127.0.0.1:27017/FinalProject');

app.use(express.static('public'))
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.render('Home')
})

app.get('/varshome', function (req, res) {
  res.render('varsHome')
})

app.get('/jvhome', function (req, res) {
  res.render('jvHome')
})

app.get('/froshhome', function (req, res) {
  res.render('froshHome')
})

app.post('/varsschedule', function (req, res) {
  res.render('VarsSchedule')
})

app.post('/jvschedule', function (req, res) {
  res.render('JVSchedule')
})

app.post('/froshschedule', function (req, res) {
  res.render('FroshSchedule')
})

app.get('/varsroster', function (req, res) {
  res.render('VarsRoster')
})

app.get('/jvroster', function (req, res) {
  res.render('JVRoster')
})

app.get('/froshroster', function (req, res) {
  res.render('FroshRoster')
})

app.post('/varslineup', function (req, res) {
  res.render('VarsLineup')
})

app.post('/jvlineup', function (req, res) {
  res.render('JVLineup')
})

app.post('/froshlineup', function (req, res) {
  res.render('JVLineup')
})

app.get('/login', function (req, res) {
  res.render('Login')
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
