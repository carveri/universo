import { pool } from "../db.js";

//get all 
export const getAllEstrella = async(req, res)=>{

    const {rows} = await pool.query('SELECT * FROM estrella')
    res.json(rows)
} 


// post
export const postEstrella = async(req, res)=>{

    const {nombre, tipo} = req.body
    await pool.query('INSERT INTO estrella (nombre, tipo) values($1, $2)', [nombre, tipo])
    res.json({"message": "Guardado!!"})

}

// get one
export const getOneEstrella = async(req, res)=>{

    const {id} = req.params
    const {rows} = await pool.query('SELECT * FROM estrella WHERE id=$1', [id])
    res.json(rows)


}


// delete 
export const deleteEstrella = async(req, res)=>{

    const {id} = req.params
    await pool.query('DELETE from estrella WHERE id=$1', [id])
    res.json({"message": "ELIMINADO!!"})
}

// update
export const updateEstrella = async(req, res)=>{

    const {id} = req.params
    const {nombre, tipo} = req.body
    
    await pool.query('UPDATE planeta SET nombre=$1 tipo=$2 WHERE id=$3', [nombre, tipo, id])
    res.json({"message": "ACTUALIZADO!!"})
    
}