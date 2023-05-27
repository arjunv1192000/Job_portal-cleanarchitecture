import userdata from "../../../entities/user.js"

const register = async (name, email, phone, password, repositories, authService) => {
  return repositories.userexist(email).then(async (user) => {
    console.log(user);
    if (!user) {
      const hashpassword = await authService.bcryptpassword(password);
      const userdetails = userdata(name, email, phone, hashpassword);
      const newuser = await repositories.create(userdetails);
      const AccessToken = await authService.generateAccessToken(newuser._id);
      const RefreshToken = await authService.generatRefreshToken(newuser._id);

      console.log(AccessToken,"aaaaaaaaaaaaaaaaa");
      console.log(RefreshToken,"aaa");

      return { status: true, newuser, AccessToken, RefreshToken };
    } else {
      return { message: 'email already exists', status: false };
    }
  });
};

export default register;
