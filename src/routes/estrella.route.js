
import { Router } from "express";
import { deleteEstrella, getAllEstrella, getOneEstrella, postEstrella, updateEstrella } from "../controllers/estrella.controller.js";

const router = Router()

router.get('/estrella', getAllEstrella)
router.post('/estrella', postEstrella)
router.get('/estrella/:id', getOneEstrella)
router.delete('/estrella/:id', deleteEstrella)
router.put('/estrella/:id', updateEstrella)

export default router;