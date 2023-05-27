


const googlelogin= async(email,repositories,authService)=>{
    console.log(email);

    const isEmail=await repositories.userexist(email)
    console.log(isEmail);
    if(isEmail && isEmail.email && !isEmail.password ){
        return({status:true})
    }else{
        return ({status:false})
    }


}
export default googlelogin