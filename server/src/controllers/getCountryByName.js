const {Country} = require("../db")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const getCountryByName = async (name)=>{
    
    const find_country = await Country.findOne({where:{nombre: { [Op.iLike]: `%${name}%` }}})
    
    if(find_country) return find_country
    else throw new Error(`No se encontro el pais con el nombre: ${name}`)
}


module.exports = getCountryByName