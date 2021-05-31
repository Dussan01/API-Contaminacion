import { Schema, model } from "mongoose";
const marcaSchema = new Schema({
    marca: {
        type: String
    },
}, {
    timestamps: true,
    versionKey: false,
});

export default model('Marca', marcaSchema);