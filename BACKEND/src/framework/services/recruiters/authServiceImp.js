
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const authServiceImp=()=>{
    const bcryptpassword= async(password)=>{
        const salt=await bcrypt.genSalt(10);
        const hashpassword=await bcrypt.hash(password,salt);
        return hashpassword


    }
    const comparePassword = (password, hashPassword) => bcrypt.compare(password, hashPassword);

    return{
        bcryptpassword ,
        comparePassword
    }

}
export default authServiceImp 