
const recruiterprofiledata=(name,email,phone,about,companyname,image,recruiterId)=>{
    console.log(recruiterId);
    return{
      
        getname:()=>name,
        getemail:()=>email,
        getphone:()=>phone,
        getabout:()=>about,
        getcompany:()=>companyname,
        getimage:()=>image,
        getrecruiterid:()=>recruiterId
        
    }


}

export default recruiterprofiledata