import { pool } from "../db.js";

// get all
export const getAllPlaneta = async(req, res)=>{
    const {rows} = await pool.query('SELECT * FROM planeta')
    res.json(rows)
}


// post
export const postPlaneta = async(req, res)=>{

    const {nombre, tipo} = req.body
    await pool.query('INSERT INTO planeta (nombre, tipo) VALUES($1, $2)', [nombre, tipo])
    res.json({"message": "Guardado!!"})
}

// get one
export const getOnePlaneta = async(req, res)=>{

    const {id} = req.params
    const {rows} = await pool.query('SELECT * FROM planeta WHERE id=$1', [id])
    res.json(rows)

}

// delete
export const deletePlaneta = async(req, res)=>{
 
    const {id} = req.params
    await pool.query('DELETE from planeta where id=$1', [id])
    res.json({"message": "BORRADO!!"})


}

// update
export const updatePlaneta = async(req, res)=>{

    const {id} = req.params
    const {nombre, tipo} = req.body

    await pool.query('UPDATE planeta SET nombre=$1, tipo=$2 where id=$3', [nombre, tipo, id])
    res.json({"message": "BORRADO!!"})


}