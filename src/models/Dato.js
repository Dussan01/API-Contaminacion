import { Schema, model } from "mongoose";
const datoSchema = new Schema({
    ubicacionMuestra: { type: String },
    wifi: { type: Number },
    bluetooth: { type: Number },
    dosG: { type: Number },
    tresG: { type: Number },
    cuatroG: { type: Number },
    cincoG: { type: Number },
    observacion: {type:String},
    marca: [{
        ref: "Marca",
        type: Schema.Types.ObjectId
    }],
    pathImgs: { type: String},
    user: [{
        ref: "user",
        type: Schema.Types.ObjectId
    }],


}, {
    timestamps: true,
    versionKey: false,
});

export default model('Dato', datoSchema);