const { Router } = require("express");
const getAllCountries = require("../controllers/getAllCountries")
const getCountryById = require("../controllers/getCountryById")
const getCountryByName = require("../controllers/getCountryByName")
const postActivity = require("../controllers/postActivity")
const getAllActivities = require("../controllers/getAllActivites")

const router = Router();

router.get("/countries", async (req,res)=>{
    try {
        const {nombre} = req.query
        if(nombre) return res.status(200).json(await getCountryByName(nombre))
        return res.status(200).json(await getAllCountries())
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

router.get("/countries/:id", async (req,res)=>{
    try {
        const {id} = req.params
        const find_country = await getCountryById(id)
        return res.status(200).json(find_country)
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

router.post("/activities", async (req,res)=>{
    
    try {
        const {nombre, dificultad, duracion, temporada,countries} = req.body
        if(!nombre  || !temporada) throw new Error("Falta informacion para crear actividad")
        else {
            const new_activity = await postActivity(nombre, dificultad, duracion, temporada, countries)
            
            return res.status(200).json(new_activity)
        }
    } catch (error) {
        return res.status(500).json(error.message)
    }
    
})

router.get("/activities", async (req,res)=>{
    try {
        return res.status(200).json(await getAllActivities())
    } catch (error) {
        return res.status(500).json(error.message)
    }
})


module.exports = router;
