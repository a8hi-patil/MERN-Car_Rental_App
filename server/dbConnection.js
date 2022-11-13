const mongoose = require("mongoose")

// function connectDB() {
//     mongoose.connect('mongodb://localhost:27017/PatilCars')
//     const connection = mongoose.connection
//     connection.on('connected', () => {
//         console.log('MongoDB Connected')
//     })
//     connection.on('error', () => {
//         console.log('MongoDB Connection failed')
//     })
// }

function connectDB() {
    mongoose.connect('mongodb+srv://abhipatil8806:hONcRQhKz7TXXotb@cluster0.uquhwde.mongodb.net/PatilCars')
    const connection = mongoose.connection
    connection.on('connected', () => {
        console.log('MongoDB Connected')
    })
    connection.on('error', () => {
        console.log('MongoDB Connection failed')
    })
}

connectDB()
module.exports = mongoose

// mongodb + srv://abhipatil8806:<password>@cluster0.uquhwde.mongodb.net/test