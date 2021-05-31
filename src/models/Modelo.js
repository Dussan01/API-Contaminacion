import { Schema, model } from "mongoose";
const modeloSchema = new Schema({
    marca: [{
        ref: "Marca",
        type: Schema.Types.ObjectId
    }],
    modelo: {
        type: String
    }
    
    
}, {
    timestamps: true,
    versionKey: false,
});

export default model('Modelo', modeloSchema);