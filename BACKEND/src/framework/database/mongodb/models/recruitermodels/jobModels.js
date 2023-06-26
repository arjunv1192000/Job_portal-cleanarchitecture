import { Schema, model } from "mongoose";
import recruiterdata from "./recruiterModels.js";
import mongoose from "mongoose";
import userprofile from "../usermodels/userProfileModel.js";



const recruiterJobSchema = new Schema({

    recruiterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recruiter',
        require: true
    },

    jobTitle: {
        type: String,
        require: true,
    },
    jobType: {
        type: String,
        require: true
    },

    jobLevel: {
        type: String,
        require: true

    },

    jobTiming: {
        type: String,
        require: true

    },

    about: {
        type: String,
        require: true

    },

    essentialKnowledge: {
        type: String,
        require: true

    },

    location: {
        type: String,
        require: true

    },

    qualification: {
        type: String,
        require: true

    },

    salary: {
        type: String,
        require: true

    },

    date: {
        type: String,
        require: true

    },

    experience: {
        type: String,
        require: true

    },

    address: {
        type: String,
        require: true

    },

    opening: {
        type: String,
        require: true

    },
    applicants: { 
        type: [Schema.Types.ObjectId], 
       
    },
    expiring:{
        type:Boolean
    },
    skills: [{
        type: String,
        required: true
      }],
      enddate: {
        type: String,
        require: true

    },






})
const jobdata = model("jobs", recruiterJobSchema);
export default jobdata;