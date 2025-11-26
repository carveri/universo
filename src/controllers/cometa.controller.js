
import { pool } from "../db.js";

// get all
export const getAllCometa = async(req, res)=>{

    const {rows} = await pool.query('SELECT * FROM cometa')
    res.json(rows)

} 


// post
export const postCometa = async(req, res)=>{

    const {nombre, masa} = req.body
    await pool.query('INSERT INTO cometa (nombre, masa) values($1, $2)', [nombre, masa])
    res.json({"message": "Guardado"})
}

// get one
export const getOneCometa = async(req, res)=>{

    const {id} = req.params
    const {rows} = await pool.query('SELECT * FROM cometa WHERE id=$1', [id])
    res.json(rows)

}


// delete
export const deleteCometa = async(req, res)=>{

    const {id} = req.params
    await pool.query('DELETE FROM cometa WHERE id=$1', [id])
    res.json({"message": "ELIMINADO!!!"})
}

export const updateCometa = async(req, res)=>{

    const {id} = req.params
    const {nombre, masa} = req.body
    await pool.query('UPDATE cometa SET nombre=$1, masa=$2 WHERE id=$3', [nombre, masa, id])
    res.json({"message": "ACTUALIZADO!!"})


}