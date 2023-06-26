import userdata from "../../models/usermodels/UserModel.js";

const userAuthRepositoryImp=()=>{



    
        
    const userExist=(email)=> userdata.findOne({email:email});
    
    const create=(user)=>{
        const newuser=new userdata({
            name:user?.getname(),
            email:user?.getemail(),
            phone:user?.getphone(),
            password:user?.getpassword(),
            profile: false,
            isBlock:false

        })
        return newuser.save()


       

    } 

    const googlecreate=(user)=>{
        const newuser=new userdata({
            name:user?.getname(),
            email:user?.getemail(),
            image:user?.getimage(),
            profile: false,
            isBlock:false
         

        })
        return newuser.save()

    }
    const profile=(userId)=>{
        return userdata.findByIdAndUpdate(userId, { profile: true }, { new: true });

    }
    const userData = async (userId) => {

         
        return await userdata.findOne({ _id: userId })
      }

      const userDatas = async () => {
        return await userdata.find();
      }


      const blockuser = async (userId) => {
        try {
        
          const user = await userdata.findById(userId);
    
          if (!user) {
           
            throw new Error('user not found');
          }
    
         
          user.isBlock =true;
          const updateduser = await user.save();
    
          return updateduser;
        } catch (error) {
          throw error;
        }
      };
      

      const unblockuser = async (userId) => {
        try {
        
          const user = await userdata.findById(userId);
    
          if (!user) {
           
            throw new Error('user not found');
          }
    
         
          user.isBlock =false;
          const updateduser = await user.save();
    
          return updateduser;
        } catch (error) {
          throw error;
        }
      };
   
    

return{
    userExist,
    create,
    googlecreate,
    profile,
    userData,
    userDatas,
    blockuser,
    unblockuser 
}
}






export default userAuthRepositoryImp