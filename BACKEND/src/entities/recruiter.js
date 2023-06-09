
const recruiterdata=(companyname,name,email,password,image)=>{
    return{
        getcompanyname:()=>companyname,
        getname:()=>name,
        getemail:()=>email,
        getpassword:()=>password,
        getimage:()=>image,
    }


}

export default recruiterdata