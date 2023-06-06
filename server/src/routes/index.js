const { Router } = require("express");
const getAllCountries = require("../controllers/getAllCountries")

const router = Router();

router.get("/countries", async (req,res)=>{
    try {
        return res.status(200).json(await getAllCountries())
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

module.exports = router;
