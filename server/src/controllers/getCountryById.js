const {Country, Activity} = require("../db")

const getCountryById = async (id)=>{
    const country_found = await Country.findOne({
        where:{id: id}, 
        include:{
            model: Activity,
            attributes: ["nombre"],
            through:{attributes: []}
                }})
    if(country_found) return country_found
    else throw new Error(`No se encontro el pais con id: ${id}`)
}

module.exports = getCountryById