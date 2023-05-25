import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../../config/config.js';
const authServiceImp=()=>{
    const bcryptpassword= async(password)=>{
        const salt=await bcrypt.genSalt(10);
        const hashpassword=await bcrypt.hash(password,salt);
        return hashpassword


    }

    return{
        bcryptpassword 
    }

}
export default authServiceImp 