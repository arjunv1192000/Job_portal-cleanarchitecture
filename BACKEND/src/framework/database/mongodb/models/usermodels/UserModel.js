import { Schema,model } from "mongoose";

const userSchema=new Schema({
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
        require:true
    },
    password:{
        type:String,
        
    }


})
const userdata=model("userdata",userSchema);
export default userdata ;