
const authServiceInterface=(repository)=>{

    const bcryptpassword=(password)=>repository.bcryptpassword(password)


    return{
        bcryptpassword
    }

}
export default authServiceInterface