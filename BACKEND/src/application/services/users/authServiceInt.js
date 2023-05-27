
const authServiceInterface=(repository)=>{

    const bcryptpassword=(password)=>repository.bcryptpassword(password)
    const comparePassword=(password,hashPassword)=>repository.comparePassword(password,hashPassword)
    const generateAccessToken = (userId) => repository.generateAccessToken(userId);
    const generatRefreshToken=(userId)=>repository.generatRefreshToken(userId)
    



    return{
        bcryptpassword,
        comparePassword,
        generateAccessToken,
        generatRefreshToken,
    }

}
export default authServiceInterface