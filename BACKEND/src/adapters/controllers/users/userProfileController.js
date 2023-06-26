  
import adduserprofile from "../../../application/useCase/users/addprofile.js"
import getuserprofile from "../../../application/useCase/users/getprofile.js"
import getappliedjob from "../../../application/useCase/users/appliedjobs.js"
import getsavedjob from "../../../application/useCase/users/savedjobs.js"
import updateuserprofile from "../../../application/useCase/users/updateprofile.js"
import userAuthRepositoryInt from "../../../application/repositories/users/userRepositoriInf.js"
import userAuthRepositoryImp from "../../../framework/database/mongodb/repositories/users/userAuthRepositoryImp.js"

const profilecontroller=(userprofileRepositoryInt,userprofileRepositoryImp)=>{
    const dbrepository=userprofileRepositoryInt(userprofileRepositoryImp())
    const userdbrepository=userAuthRepositoryInt(userAuthRepositoryImp())

    const addprofile=(req,res)=>{
    
      
        const{userId,name,email,phone,about,education,language,personalwebsite,location,jobRole,image,cv}=req.body


     adduserprofile(userId,name,email,phone,about,education,language,personalwebsite,location,jobRole,image,cv,dbrepository,userdbrepository).then((response)=>{
        console.log(response);
         res.json(response)
       
     }).catch((err)=>console.log(err))


    

     
 }

 const selectprofiledata=(req,res)=>{

    const userId = req.query.id;
    console.log(userId);

    getuserprofile(userId,dbrepository).then((response)=>{
        console.log(response);
        res.json(response)

    }).catch((err)=>console.log(err))

 }


 const selectappliedjob=(req,res)=>{
    const userId=req.query.id
    console.log(userId);
    getappliedjob(userId,dbrepository).then((response)=>{
        console.log(response);
        res.json(response)

    }).catch((err)=>console.log(err))
}

const selectsavedjob=(req,res)=>{
    const userId=req.query.id
   
    getsavedjob(userId,dbrepository).then((response)=>{
        res.json(response)

    }).catch((err)=>console.log(err))
}

const updateprofile=(req,res)=>{
    
    console.log(req.body,"userprofile");  
 const{userId,name,email,phone,about,education,language,personalWebsite,location,jobRole,image,cv}=req.body


 updateuserprofile(userId,name,email,phone,about,education,language,personalWebsite,location,jobRole,image,cv,dbrepository).then((response)=>{
    console.log(response,"update");
     res.json(response)
   
 }).catch((err)=>console.log(err))
}
 return{
    addprofile,
    selectprofiledata,
    selectappliedjob,
    selectsavedjob,
    updateprofile
    
    
 }

}
export default profilecontroller