
const recruiterdata=(companyname,name,email,password)=>{
    return{
        getcompanyname:()=>companyname,
        getname:()=>name,
        getemail:()=>email,
        getpassword:()=>password,
    }


}

export default recruiterdata