const express = require('express')
const Car = require('../models/carModel')
const router = express.Router()
const jwt = require('jsonwebtoken')
const jwtKey = 'car-rental'

function verifyTocken(req, res, next) {

    let tocken = req.headers['authorization']

    if (tocken) {
        // tocken = tocken.split(' ')[1]
        // console.log(tocken)
        jwt.verify(tocken, jwtKey, (err, valid) => {
            if (err) {
                res.send('provide valid tocken')
            } else {
                next()
            }
        })
    } else {

        res.send('tocken not found')
    }


}

router.get('/getallcars', verifyTocken, async (req, res) => {
    try {
        const cars = await Car.find()
        // console.log('hit', cars)
        res.send(cars)
    } catch (e) {
        return res.status(400).json(e)
    }
})

router.post('/getallcars', async (req, res) => {
    console.log(req.body)
    if (req.body) {
        try {
            // console.log('reqbody',req.body)
            const newCar = new Car(req.body)
            // console.log('new car',newCar)
            // await newCar.save()
            res.send('Car Added')

        } catch (e) {
            return res.status(400).json(e)
        }
    } else {
        res.send('Empthy body')
    }
})

router.post('/getsinglecar', async (req, res) => {
    try {
        // console.log(req.body)
        const car = await Car.find(req.body)
        res.send(car)
    } catch (e) {
        return res.status(400).json(e)
    }
})



router.post('/getownercar', async (req, res) => {
    try {
        // console.log(req.body)
        // console.log('getcar')
        const car = await Car.find(req.body)
        // console.log(car)
        res.send(car)
    } catch (e) {
        return res.status(400).json(e)
    }
})
module.exports = router