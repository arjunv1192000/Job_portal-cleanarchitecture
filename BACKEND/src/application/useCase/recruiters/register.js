import recruiterdata from "../../../entities/recruiter.js";

const register = async (companyname, name, email, password,image, repositories, authService) => {

    return repositories.recruiterExist(email).then(async (recruiter) => {
        if (!recruiter) {
            const hashpassword = await authService.bcryptpassword(password)

            const recruiterdetails = recruiterdata(companyname, name, email, hashpassword,image)
            const newrecruiter = await repositories.createrecruiter(recruiterdetails)
            const isRecruiter = {
                recruiterId: newrecruiter._id,
                recruiterName: newrecruiter.name,
                recruiterCompany: newrecruiter.companyname,
                recruiterEmail: newrecruiter.email,
                recruiterImage:newrecruiter.image,

            }
            console.log(isRecruiter);
            const AccessToken = await authService.generateAccessToken(isRecruiter);
            const RefreshToken = await authService.generatRefreshToken(isRecruiter);

            console.log(AccessToken);
            console.log(RefreshToken);
            return ({ status: true, isRecruiter, AccessToken, RefreshToken })
        } else {

            return ({ message: 'email already exisits', status: false })
        }

    })

}
export default register