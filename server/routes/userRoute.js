const express = require('express')
const User = require('../models/userModel')
const router = express.Router()
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')
const jwtKey = 'car-rental'


router.post('/login', async (req, res) => {
    const { username, password } = req.body
    console.log(username)
    console.log(password)

    User.findOne({ username: username }, async (err, user) => {

        let hash = bcrypt.hashSync(req.body.password, saltRounds)
        console.log(hash)
        if (bcrypt.compareSync(password, hash)) {
            // const data = await User.findOne({ password: hash })
            // console.log(data)
            // jwt.sign({ user }, jwtKey, {
            //     expiresIn: '2h'
            // }, (err, tocken) => {

            //     if (err) {
            //         res.send("Failed")
            //     }
            //     res.send({ user, auth: tocken })
            // })
            let tocken = jwt.sign({ user }, jwtKey)
            user.tocken = tocken
            await user.save()
            res.send(user)

        } else {
            res.send('wrong ps')
        }
    })
})



router.post('/verify', async (req, res) => {
    // console.log(req.body)
    // console.log(req.body.username)

    User.findOne({ username: req.body.username }, async function (err, doc) {
        if (err) throw err;
        if (doc) {
            // console.log(doc)
            return res.send({ col: true }); //or throw whatever you want
        } else {
            return res.send({ col: false });
        }
    })
})

router.post('/register', async (req, res) => {
    let hash = bcrypt.hashSync(req.body.password, saltRounds)

    User.findOne({ username: req.body.username }, async function (err, doc) {
        if (err) throw err;
        if (doc) {
            // console.log(doc)
            return res.status(400).send("Nickname already taken"); //or throw whatever you want
        }
        else {

            const newUser = new User({ username: req.body.username, type: req.body.type, password: hash })

            // jwt.sign({ newUser }, jwtKey, {
            //     expiresIn: '2h'
            // }, async (err, tocken) => {
            //     newUser.tocken = tocken
            //     await newUser.save()
            //     res.send(newUser)
            // })

            await newUser.save()
            res.send("Reg")

            // console.log(newUser)

        }
    });











    // let hash = bcrypt.hashSync(req.body.password, saltRounds)
    // console.log(hash, req.body.password)
    // try {
    //     const newUser = new User({ username: req.body.username, type: req.body.type, password: hash })
    //     await newUser.save()
    //     res.send('Registered')
    // } catch (e) {
    //     return res.status(400).json(e)
    // }

})


router.post('/getsingleowner', async (req, res) => {


    const data = await User.find(req.body)
    // console.log(data)
    res.send(data)

})


router.get('/getalluser', async (req, res) => {


    const data = await User.find()
    // console.log(data)
    res.send(data)

})

module.exports = router