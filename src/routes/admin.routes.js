import { Router } from "express";
const router = Router();
import * as adminCtrl from "../controllers/admin.controller";


// CRUD BRAND
router.get('/getBrands', adminCtrl.getBrands);
router.post('/createBrand', adminCtrl.createBrand);
router.get('/getBrandById/:brandId', adminCtrl.getByIdBrand);
router.put('/updateBrand/:brandId', adminCtrl.updateBrand);
router.delete('/deleteBrand/:brandId', adminCtrl.deleteUserById);

// CRUD MODEL
router.get('/getModelos', adminCtrl.getModelos);
router.post('/createModelo', adminCtrl.createModelo);
router.get('/getModeloById/:brandId', adminCtrl.getByIdModelo);
router.put('/updateModelo/:brandId', adminCtrl.updateModelo);
router.delete('/deleteModelo/:brandId', adminCtrl.deleteModelo);




// CRUD USERS
router.get('/users', adminCtrl.getUsers);
router.post('/createUser', adminCtrl.createUser);
router.get('/getUserById/:userId', adminCtrl.getUserById);
router.put('/updateUser/:userId', adminCtrl.updateUserById);
router.delete('/delete/:userId', adminCtrl.deleteUserById);




export default router;