import User from '../models/User';
import Dato from '../models/Dato';
import jwt from "jsonwebtoken";
import config from "../config";
import Resultado from '../models/Resultado';
import Marca from '../models/Marca';
import uploadFile from "../middlewares/upload";
import { mongo } from "mongoose";
const fs = require('fs');



export const createData = async (req, res) => {
    console.log(__basedir)


    // fs.mkdir(`${__basedir}/resources/static/assets/uploads/${req.params.idUser}/${req.params.idMarca}`, function (e) { if (!e || (e && e.code === 'EEXIST')) { } else { } });

    // await uploadFile(req, res).catch(e => console.error(e));
    const {
        ubicacionMuestra,
        wifi,
        bluetooth,
        dosG,
        tresG,
        cuatroG,
        cincoG,
        observacion,
        marca,
        pathImgs } = req.body;
    const newData = await Dato({ ubicacionMuestra, wifi, bluetooth, dosG, tresG, cuatroG, cincoG, observacion })
    newData.marca = req.params.idMarca
    newData.user = req.params.idUser
    // newData.pathImgs = req.file.path
    newData.save()
    res.json({ message: "Subido correctamente" })

}


export const computar = async (req, res) => {
    await Resultado.collection.drop()
    // await Resultado.db.dropCollection()
    const foundBrand = await Marca.find()
    let marc = [];
    foundBrand.forEach((item) => marc.push(item._id))
    for (let i = 0; i < marc.length; i++) {
        const datos = await Dato.find({ marca: mongo.ObjectId(marc[i]) })
        var brand = "";
        var wifi = 0;
        var blue = 0;
        var dos = 0;
        var tres = 0;
        var cuatro = 0;
        var cinco = 0;
        datos.forEach((item) => {
            brand = item.marca
            wifi = wifi + item.wifi
            blue = blue + item.bluetooth
            dos = dos + item.dosG
            tres = tres + item.tresG
            cuatro = cuatro + item.cuatroG
            cinco = cinco + item.cincoG
        })

        const result = new Resultado({
            marca: brand,
            resultWifi: wifi / datos.length,
            resultbluetooth: blue / datos.length,
            resultdosG: dos / datos.length,
            resulttresG: tres / datos.length,
            resultcuatroG: cuatro / datos.length,
            resultcincoG: cinco / datos.length,
        })
        result.save();

        
    }
    console.log(marc)

    const foundResultado = await Resultado.find().populate('marca')
    console.log(foundResultado)

    res.status(200).json("creado")


}


export const ver = async (req, res) => {
    const foundResultado = await Resultado.find().populate('marca')
    console.log(foundResultado)
    res.status(200).json(foundResultado)
}


export const perfil = async(req, res) => {
    const token = req.headers["x-access-token"];
    if(!token) return res.status(403).json({message: "No Token"})
    const decoded = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;
    const user = await User.findById(req.userId, {password: 0}).populate("roles")
    res.status(200).json(user)
}

export const MyDatos = async (req, res) => {
    const token = req.headers["x-access-token"];
    if(!token) return res.status(403).json({message: "No Token"})
    const decoded = jwt.verify(token, config.SECRET);
    const id = decoded.id;
    const foundData = await Dato.find({'user': mongo.ObjectId(id)}).populate('marca')
    console.log(foundData)
    res.status(200).json(foundData)


}