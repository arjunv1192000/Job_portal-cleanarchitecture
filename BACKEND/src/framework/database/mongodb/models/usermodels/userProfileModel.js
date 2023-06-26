import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const userprofileSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
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

    education: {
        type: String,
        require: true,

    },
    language: {
        type: String,
        require: true,
    },
    personalwebsite: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    jobRole: {
        type: String,
        require: true,
    },
    image: {
        type: String,

    },
    cv: {
        type: String,

    },
   appliedjobs: {
        type: [{
            _id: {
                type: Schema.Types.ObjectId,
                ref: "jobs"
            },
            status: {
                type: String,
                default: "pending"
            },
           
        }],
        ref: "jobs"
       
    },
    savedjobs: {
        type:[Schema.Types.ObjectId],
        ref: "jobs",

    }


})
const userprofile = model("userprofiles", userprofileSchema);
export default userprofile;