
const authServiceInterface=(repository)=>{

    const bcryptpassword=(password)=>repository.bcryptpassword(password)
    const comparePassword=(password,hashPassword)=>repository.comparePassword(password,hashPassword)
    const generateAccessToken = (userId) => repository.generateAccessToken(userId);
    const generatRefreshToken=(userId)=>repository.generatRefreshToken(userId)
    const verifyAccessToken=(token)=>repository.verifyAccessToken(token)
    const verifyRefreshToken=(token)=>repository.verifyRefreshToken(token)
  
    



    return{
        bcryptpassword,
        comparePassword,
        generateAccessToken,
        generatRefreshToken,
        verifyAccessToken,
        verifyRefreshToken
    }

}
export default authServiceInterface