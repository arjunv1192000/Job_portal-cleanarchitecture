import recruiterdata from "../../models/recruitermodels/recruiterModels.js";

 const  recruiterAuthRepositoryImp=()=>{

    const recruiterExist=(email)=> recruiterdata.findOne({email:email});
    
    const createrecruiter=(recruiter)=>{
        const newuser=new recruiterdata({
            companyname:recruiter?.getcompanyname(),
            name:recruiter?.getname(),
            email:recruiter?.getemail(),
            password:recruiter?.getpassword(),
            image:recruiter?.getimage()

        })
        return newuser.save()


       

    } 

    return{
        recruiterExist,
        createrecruiter

    }
}


export default recruiterAuthRepositoryImp 