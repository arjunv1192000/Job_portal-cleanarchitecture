import { Schema, model } from "mongoose";

const recruiterSchema = new Schema({

    companyname: {
        type: String,
        require: true
    },

    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },

    password: {
        type: String,

    },
    image: {
        type: String,

    },
    profile:{
        type:Boolean
    },
    isBlock:{
        type:Boolean
    }



})
const recruiterdata = model("recruiter", recruiterSchema);
export default recruiterdata;