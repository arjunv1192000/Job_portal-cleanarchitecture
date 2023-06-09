import userprofile from "../../models/usermodels/userProfileModel.js";

const userprofileRepositoryImp=()=>{
    const create=(userdata)=>{
       
        const newuserprofile=new userprofile({
            userId:userdata?.getuserid(),
            name:userdata?.getname(),
            email:userdata?.getemail(),
            phone:userdata?.getphone(),
            about:userdata?.getabout(),
            education:userdata?.geteducation(),
            language:userdata?.getlanguage(),
            personalwebsite:userdata?.getwebsite(),
            location:userdata?.getlocation(),
            jobRole:userdata?.getjobrole(),
            image:userdata?.getimage(),
            cv:userdata?.getcv(),

            

        })
        return newuserprofile.save()
    }
    const userProfile=async (userId)=>{
        console.log(">>>>>>>",userId)
        return await userprofile.findOne({userId:userId})
    }


    return{
        create,
        userProfile
    }

}
export default userprofileRepositoryImp