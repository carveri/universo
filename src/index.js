import express from "express";
import planetaRoute from "../src/routes/planeta.route.js";

const app = express()

app.use(express.json())
app.use('/api', planetaRoute)



const PORT = 3000



app.listen(PORT, ()=>{
    console.log('corriendo');
    
})