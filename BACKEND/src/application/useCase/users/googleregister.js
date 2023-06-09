import googledata from "../../../entities/google.js"

const googleregister = async (name, email,image, repositories, authService) => {


    return repositories.userexist(email).then(async (user) => {
        if (!user) {


            const userdetails = googledata(name, email,image)

            const newuser = await repositories.googlecreate(userdetails)
            const isUser = {
                userId: newuser._id,
                userName: newuser.name,
                userEmail: newuser.email,
                userImage:newuser.image

            }
            const AccessToken = await authService.generateAccessToken(isUser);
            const RefreshToken = await authService.generatRefreshToken(isUser);


            return { status: true,isUser, AccessToken, RefreshToken };
        } else {
            
            return ({ message: 'email already exisits', status: false })
        }

    })




}
export default googleregister