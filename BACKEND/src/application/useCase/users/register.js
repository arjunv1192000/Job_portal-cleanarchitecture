const register=(name,email,phone,password,repositories,authService)=>{


    return repositories.userexist(email).then(async(user)=>{
        if(!user){
            const hashpassword=await authService.bcryptpassword(password)

            return repositories.create(name,email,phone,hashpassword)
        }

    })




}
export default register