const mongoose = require('mongoose')
const ProverbesChema = mongoose.Schema({
    title:{type:String, required:true}
},{timestamps: true})

module.exports = mongoose.model("ProverbesChema", ProverbesChema)