import recruiterdata from "../../models/recruitermodels/recruiterModels.js";

 const  recruiterAuthRepositoryImp=()=>{

    const recruiterExist=(email)=> recruiterdata.findOne({email:email});

    
    const createrecruiter=(recruiter)=>{
        const newuser=new recruiterdata({
            companyname:recruiter?.getcompanyname(),
            name:recruiter?.getname(),
            email:recruiter?.getemail(),
            password:recruiter?.getpassword(),
            image:recruiter?.getimage(),
            profile: false,
            isBlock:false

        })
        return newuser.save()


       

    } 

    const profile = async (recruiterId) => {
        try {
          const data = await recruiterdata.findById(recruiterId);
      
          if (!data) {
            throw new Error('Job not found');
          }
      
          data.profile = true;
          const updatedData = await data.save();
      
          return updatedData;
        } catch (error) {
          throw error;
        }
      };

      const recruiterData = async (recruiterId) => {

         
        return await recruiterdata.findOne({ _id: recruiterId })
      }


      const recruiterDatas = async () => {
        return await recruiterdata.find();
      }

      const blockrecruiter = async (recruiterId) => {
        console.log(recruiterId);
        try {
        
          const recruiter = await recruiterdata.findById(recruiterId);
          console.log(recruiter);
    
          if (!recruiter) {
           
            throw new Error('user not found');
          }
    
         
          recruiter.isBlock =true;
          const updateduser = await recruiter.save();
    
          return updateduser;
        } catch (error) {
          throw error;
        }
      };

      const unblockrecruiter = async (recruiterId) => {
        console.log(recruiterId);
        try {
        
          const recruiter = await recruiterdata.findById(recruiterId);
          console.log(recruiter);
    
          if (!recruiter) {
           
            throw new Error('user not found');
          }
    
         
          recruiter.isBlock =false;
          const updateduser = await recruiter.save();
    
          return updateduser;
        } catch (error) {
          throw error;
        }
      };
      
    

    return{
        recruiterExist,
        createrecruiter,
        profile,
        recruiterData,
        recruiterDatas,
        blockrecruiter,
        unblockrecruiter

    }
}


export default recruiterAuthRepositoryImp 