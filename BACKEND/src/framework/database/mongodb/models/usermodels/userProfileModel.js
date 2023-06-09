import { Schema,model } from "mongoose";

const userprofileSchema=new Schema({
    userId:{
        type:String,
        require:true,

    },
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true,
       
    },
   
    about:{
        type:String,
        require:true,
    },
    
    education:{
        type:String,
        require:true,

    },
    language:{
        type:String,
        require:true,
    },
    personalwebsite:{
        type:String,
        require:true,
    },
    location:{
        type:String,
        require:true,
    },
    jobRole:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        
    },
    cv:{
        type:String,
        
    },


})
const userprofile=model("userprofile",userprofileSchema);
export default userprofile ;