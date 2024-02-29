import { Schema, model } from "mongoose";
const noteschema = new Schema({

    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }

}, { timestamps: true });




const notesmodel = model("notesmodel", noteschema)

export default notesmodel
