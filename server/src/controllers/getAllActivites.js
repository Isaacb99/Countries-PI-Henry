const {Activity} = require("../db")

const getAllActivities = async()=>{

    const activities = await Activity.findAll()
    if(!activities) throw new Error("No se encontraron actividades")
    return activities
}

module.exports = getAllActivities