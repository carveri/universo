import express from "express";
import planetaRoute from "../src/routes/planeta.route.js";
import cometaRoute from "../src/routes/cometa.route.js";
import estrellaRoute from "../src/routes/estrella.route.js";

const app = express()

app.use(express.json())
app.use('/api', planetaRoute)
app.use('/api', cometaRoute)
app.use('/api', estrellaRoute)

const PORT = 3000



app.listen(PORT, ()=>{
    console.log('corriendo');
    
})