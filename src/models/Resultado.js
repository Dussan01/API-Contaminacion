import { Schema, model } from "mongoose";


const resultadoSchema = new Schema(
    {
        marca: [{
            ref: "Marca",
            type: Schema.Types.ObjectId
        }],
        resultWifi: { type: Number},
        resultbluetooth: { type: Number },
        resultdosG: { type: Number },
        resulttresG: { type: Number },
        resultcuatroG: { type: Number },
        resultcincoG: { type: Number },
    },
    {
        versionKey: false
    }
);

export default model("Resultado", resultadoSchema);