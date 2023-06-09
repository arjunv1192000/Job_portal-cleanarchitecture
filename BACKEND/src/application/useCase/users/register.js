import userdata from "../../../entities/user.js"

const register = async (name, email, phone, password, repositories, authService) => {
  return repositories.userexist(email).then(async (user) => {
    console.log(user);
    if (!user) {
      const hashpassword = await authService.bcryptpassword(password);
      const userdetails = userdata(name, email, phone, hashpassword);
      const newuser = await repositories.create(userdetails);
      
      const isUser={
        userId:newuser._id,
        userName:newuser.name,
        userEmail:newuser.email,

      }
      const AccessToken = await authService.generateAccessToken(isUser);
      const RefreshToken = await authService.generatRefreshToken(isUser);

      console.log(AccessToken);
      console.log(RefreshToken);

      return { status: true,isUser, AccessToken, RefreshToken };
    } else {
      return { message: 'email already exists', status: false };
    }
  });
};

export default register;
