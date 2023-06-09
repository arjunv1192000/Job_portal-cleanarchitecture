const login = async (email, password, repositories, authService) => {

    const isEmail = await repositories.recruiterExist(email)
    console.log(isEmail, "sdasadsdsadas");
    if (isEmail.email != 0 && isEmail.password) {
        const isPassword = await authService.comparePassword(password, isEmail.password)
        if (isPassword) {

            const isRecruiter = {
                recruiterId: isEmail._id,
                recruiterName: isEmail.name,
                recruiterCompany: isEmail.companyname,
                recruiterEmail: isEmail.email,

            }
            const AccessToken = await authService.generateAccessToken(isRecruiter);
            const RefreshToken = await authService.generatRefreshToken(isRecruiter);


            return({status:true,isRecruiter,AccessToken,RefreshToken})

        } else {

            return ({ status: false })

        }
    } else {

        return ({ message: 'Invalid email or password', status: false })
    }


}
export default login