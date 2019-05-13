const express = require('express')
const app = express()
const bodyParser = require('body-parser')

var gameSchema = require('./models/gameSchema')
var lineupSchema = require('./models/lineupSchema')

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

// change
