const {Country} = require("../db")

const getAllCountries = async()=> await Country.findAll()

module.exports= getAllCountries