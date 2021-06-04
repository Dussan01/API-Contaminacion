import { Router } from "express";
const router = Router();
import * as datosCtrl from "../controllers/datos.controller";


router.get('/getDatos', datosCtrl.getData);

export default router;