
import { Router } from "express";
import { deletePlaneta, getAllPlaneta, getOnePlaneta, postPlaneta, updatePlaneta } from "../controllers/planeta.controller.js";

const router = Router()

router.get('/planeta', getAllPlaneta)
router.post('/planeta', postPlaneta)
router.get('/planeta/:id', getOnePlaneta)
router.delete('/planeta/:id', deletePlaneta)
router.put('/planeta/:id', updatePlaneta)

export default router;
