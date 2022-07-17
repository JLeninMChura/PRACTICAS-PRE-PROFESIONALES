import { Schema, model } from "mongoose";

const practicaSchema = new Schema(
    {
    id_inicio_doc: String,
    f_inicio: {
        dia: Number,
        mes: Number,
        anio: Number,
    },
    f_fin: {
        dia: Number,
        mes: Number,
        anio: Number,
    },
    h_entrada: String,
    h_salida: String,
    },
    {
        timestamps: true,
        versionKey: false
    }
);
export default model('Practica', practicaSchema);