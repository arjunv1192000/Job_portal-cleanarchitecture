


const googlelogin= async(email,repositories,authService)=>{
    console.log(email);

    const isEmail=await repositories.userexist(email)
    console.log(isEmail);
    if(isEmail && isEmail.email && !isEmail.password ){
        const isUser={
            userId:isEmail._id,
            userName:isEmail.name,
            userEmail:isEmail.email,
            userImage:isEmail.image
    
          }
          const AccessToken = await authService.generateAccessToken(isUser);
          const RefreshToken = await authService.generatRefreshToken(isUser);

        return({status:true,isUser,AccessToken,RefreshToken})
       
    }else{
        return ({status:false})
    }


}
export default googlelogin