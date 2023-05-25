import userdata from "../../models/usermodels/UserModel.js";

const userAuthRepositoryImp=()=>{

    
        
    const userExist=(email)=> userdata.findOne({email:email});
    
    const create=(name,email,phone,password)=> userdata.create({name,email,phone,password});
   
    

return{
    userExist,
    create,
}
}






export default userAuthRepositoryImp