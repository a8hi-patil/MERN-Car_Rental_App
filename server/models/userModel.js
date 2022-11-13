const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: { type: String, require: true },
    type: { type: String, require: true },
    password: { type: String, require: true },
    tocken: { type: String},

})
const userModel = mongoose.model('user', userSchema)
module.exports = userModel

