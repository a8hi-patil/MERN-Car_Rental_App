const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    image: { type: String, require: true },
    name: { type: String, require: true },
    brand: { type: String, require: true },
    rentPerHour: { type: Number, require: true },
    user: { type: String, require: true }
})

const carModel = mongoose.model('car', carSchema)
module.exports = carModel