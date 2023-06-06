const axios = require("axios");
const server = require("./src/server");
const { conn,Country } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, async () => {
  const dbCon =  Country.findAll()
  if(!dbCon.length){
  
    const api_response = await axios.get("http://localhost:5000/countries")
    const api_data = await api_response.data.map((pais)=>{
    return{
        id: pais.cca3,
        nombre: pais.name.common,
        imagen_bandera: pais.flags.svg,
        continente: pais.continents[0],
        capital: pais.capital? pais.capital[0] : "Not Found",
        subregion: pais.subregion? pais.subregion : "Not Found",
        area: pais.area,
        poblacion: pais.population 
      }
  })

  for(let i=0; i<api_data.length; i++){
    await Country.findOrCreate({where:{nombre: api_data[i].nombre}, defaults:api_data[i]})
  }
}
console.log(`Listening on Port: ${PORT}`);
})
}).catch(error => console.error(error))
