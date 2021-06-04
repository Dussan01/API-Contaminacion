import Datos from '../models/Dato';

export const getData = async (req, res) => {
    const foundData = await Datos.find().populate("marca");
    res.status(200).json(foundData);
}