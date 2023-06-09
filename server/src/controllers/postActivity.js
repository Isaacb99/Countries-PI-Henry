const {Activity} = require("../db")

const postActivity = async (nombre, dificultad, duracion, temporada, countries)=>{

    const activity = await Activity.create({nombre, dificultad, duracion, temporada})

    if(countries.length >= 1) activity.addCountries(countries)
    
    if(!activity) throw new Error(`No se pudo crear la actividad con nombre: ${nombre}`)
    return activity
}

module.exports = postActivity