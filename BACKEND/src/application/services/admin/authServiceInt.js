const authServiceInterface = (repository) => {
    const bcryptpassword = (password) => repository.bcryptpassword(password);
    const comparePassword = (password, hashPassword) => repository.comparePassword(password, hashPassword);
    const generateAccessToken = (recruiterId) => repository.generateAccessToken(recruiterId);
    const generatRefreshToken = (recruiterId) => repository.generatRefreshToken(recruiterId);
    const verifyAccessToken=(token)=>repository.verifyAccessToken(token)
    const verifyRefreshToken=(token)=>repository.verifyRefreshToken(token)
  
    return {
      bcryptpassword,
      comparePassword,
      generateAccessToken,
      generatRefreshToken,
      verifyAccessToken,
      verifyRefreshToken
    };
  };
  
  export default authServiceInterface;
  