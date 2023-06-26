import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const recruiterprofileSchema = new Schema({
    recruiterId: {
        type: mongoose.Schema.Types.Object,
        require: true,

    },
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true,

    },

    about: {
        type: String,
        require: true,
    },

    companyname: {
        type: String,
        require: true,

    },
    image: {
        type: String,

    },
   


})
const recruiterprofile = model("recruiterprofile", recruiterprofileSchema);
export default recruiterprofile;