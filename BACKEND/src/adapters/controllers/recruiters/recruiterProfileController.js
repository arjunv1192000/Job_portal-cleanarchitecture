import addrecruiterprofile from "../../../application/useCase/recruiters/createprofile.js"
import getprofile from "../../../application/useCase/recruiters/getprofiledata.js"
import updateprofile from "../../../application/useCase/recruiters/updateprofile.js"

const recruiterprofilecontroller=(recruiterProfileRepositoryInt,recruiterProfileRepositoryImp,recruiterAuthRepositoryInt,recruiterAuthRepositoryImp)=>{
    const dbrepository =recruiterProfileRepositoryInt(recruiterProfileRepositoryImp())
    const recruiterdbrepository=recruiterAuthRepositoryInt(recruiterAuthRepositoryImp())


    const createprofile = (req, res) => {
        console.log(req.body);

        const{name,email,phone,about,companyname,image,recruiterId}=req.body

            addrecruiterprofile(name,email,phone,about,companyname,image,recruiterId,dbrepository,recruiterdbrepository).then((response) => {

            res.json(response)

        }).catch((err) => console.log(err))

    }

    const selectprofiledata=(req,res)=>{

        const recruiterId = req.query.id;
        console.log(recruiterId);
    
        getprofile(recruiterId,dbrepository).then((response)=>{
            console.log(response);
            res.json(response)
    
        }).catch((err)=>console.log(err))
    
     }
     const Updateprofile=(req,res)=>{
        console.log(req.body);
    
     const{name,email,phone,about,companyname,image,recruiterId}=req.body
    
    
     updateprofile(name,email,phone,about,companyname,image,recruiterId,dbrepository).then((response)=>{
       
         res.json(response)
       
     }).catch((err)=>console.log(err))
    }

    return{
        createprofile,
        selectprofiledata,
        Updateprofile

    }


}
export default recruiterprofilecontroller