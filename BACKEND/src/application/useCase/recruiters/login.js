const login=async (email,password,repositories,authService)=>{

    const isEmail= await repositories.recruiterExist(email)
    console.log(isEmail,"sdasadsdsadas");
    if(isEmail.email !=0 && isEmail.password){
        const isPassword=await authService.comparePassword(password,isEmail.password)
        if(isPassword){
            console.log("passsssssssssssssssss");

            return({status:true})
            
        }else{
            console.log("false ppppppppppppppppp");
            return({status:false})

        }
    }else{
       
        return ({message:'Invalid email or password',status:false})
    }
    

}
export default login