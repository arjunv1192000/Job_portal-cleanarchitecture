import userdata from "../../models/usermodels/UserModel.js";

const userAuthRepositoryImp=()=>{



    
        
    const userExist=(email)=> userdata.findOne({email:email});
    
    const create=(user)=>{
        const newuser=new userdata({
            name:user?.getname(),
            email:user?.getemail(),
            phone:user?.getphone(),
            password:user?.getpassword()

        })
        return newuser.save()


       

    } 

    const googlecreate=(user)=>{
        const newuser=new userdata({
            name:user?.getname(),
            email:user?.getemail(),
         

        })
        return newuser.save()

    }
   
    

return{
    userExist,
    create,
    googlecreate,
}
}






export default userAuthRepositoryImp