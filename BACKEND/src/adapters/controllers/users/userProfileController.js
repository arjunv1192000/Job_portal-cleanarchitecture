  
import adduserprofile from "../../../application/useCase/users/addprofile.js"
import getuserprofile from "../../../application/useCase/users/getprofile.js"

const profilecontroller=(userprofileRepositoryInt,userprofileRepositoryImp)=>{
    const dbrepository=userprofileRepositoryInt(userprofileRepositoryImp())

    const addprofile=(req,res)=>{
    
      
        const{userId,name,email,phone,about,education,language,personalwebsite,location,jobRole,image,cv}=req.body


     adduserprofile(userId,name,email,phone,about,education,language,personalwebsite,location,jobRole,image,cv,dbrepository).then((response)=>{
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
 return{
    addprofile,
    selectprofiledata
    
    
 }

}
export default profilecontroller