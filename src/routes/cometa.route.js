
import { Router } from "express";
import { deleteCometa, getAllCometa, getOneCometa, postCometa, updateCometa } from "../controllers/cometa.controller.js";


const router = Router()

router.get('/cometa', getAllCometa)
router.post('/cometa', postCometa)
router.get('/cometa/:id', getOneCometa)
router.delete('/cometa/:id', deleteCometa)
router.put('/cometa/:id', updateCometa)

export default router