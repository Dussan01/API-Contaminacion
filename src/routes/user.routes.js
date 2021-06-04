import { Router } from "express";
const router = Router();
import * as userCtrl from "../controllers/user.controller";


// CRUD BRAND
// router.get('/getBrands', adminCtrl.getBrands);
router.post('/', userCtrl.perfil);
router.get('/ver', userCtrl.ver);
router.get('/misDatos', userCtrl.MyDatos);
router.get('/verResultados', userCtrl.computar);
router.post('/createData/:idUser&:idMarca',userCtrl.createData);
// router.get('/getBrandById/:brandId', adminCtrl.getByIdBrand);
// router.put('/updateBrand/:brandId', adminCtrl.updateBrand);
// router.delete('/deleteBrand/:brandId', adminCtrl.deleteUserById);


export default router;