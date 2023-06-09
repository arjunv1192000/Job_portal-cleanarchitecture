

const login=async (email,password,repositories,authService)=>{

    const isEmail= await repositories.userexist(email)
    console.log(isEmail,"login");
   
    if(isEmail.email !=0 && isEmail.password){
        const isPassword=await authService.comparePassword(password,isEmail.password)
        if(isPassword){
          
            const isUser={
                userId:isEmail._id,
                userName:isEmail.name,
                userEmail:isEmail.email,
        
              }
              const AccessToken = await authService.generateAccessToken(isUser);
              const RefreshToken = await authService.generatRefreshToken(isUser);

            return({status:true,isUser,AccessToken,RefreshToken})
            
        }else{
           
            return({status:false})

        }
    }else{
       
        return ({message:'Invalid email or password',status:false})
    }
    

}
export default login