import userprofile from "../../models/usermodels/userProfileModel.js";
import mongoose from "mongoose"
import { Types } from 'mongoose';




const userprofileRepositoryImp = () => {
  const create = (userdata) => {

    const newuserprofile = new userprofile({
      userId: userdata?.getuserid(),
      name: userdata?.getname(),
      email: userdata?.getemail(),
      phone: userdata?.getphone(),
      about: userdata?.getabout(),
      education: userdata?.geteducation(),
      language: userdata?.getlanguage(),
      personalwebsite: userdata?.getwebsite(),
      location: userdata?.getlocation(),
      jobRole: userdata?.getjobrole(),
      image: userdata?.getimage(),
      cv: userdata?.getcv(),



    })
    return newuserprofile.save()
  }
  const userProfile = async (userId) => {
    return await userprofile.findOne({ userId: userId })
  }



  // const apply = async (userId, jobId) => {

  //   try {
  //     const userProfile = await userprofile.findOne({ userId: userId });
  //     if (!userProfile) {
  //       return false;
  //     }
  //     const appliedJobs = userProfile.appliedjobs;
  //     if (!appliedJobs.includes(jobId)) {
  //       appliedJobs.push(jobId);
  //       userProfile.appliedjobs = appliedJobs;
  //       await userProfile.save();
  //       return true;
  //     }
  //     return false;
  //   } catch (error) {

  //     return false;
  //   }
  // };
  const apply = async (userId, jobId) => {
    try {
      const userProfile = await userprofile.findOne({ userId: userId });
      if (!userProfile) {
        return false;
      }
  
      const appliedJobs = userProfile.appliedjobs;
      const jobExists = appliedJobs.some(appliedJob => appliedJob._id.equals(jobId));
      
      if (!jobExists) {
        appliedJobs.push({ _id: jobId, status: "pending" });
        userProfile.appliedjobs = appliedJobs;
        await userProfile.save();
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };
  



  const userAppliedjob = async (userId) => {

    try {
      const user = await userprofile.findOne({ userId: userId })
        .populate({
          path: 'appliedjobs._id',
          populate: {
            path: 'recruiterId',
            select: 'companyname image name',
            model: 'recruiter'
          }
        });

      console.log(user.appliedjobs, "aaa");
      return user.appliedjobs;
    } catch (error) {
      console.error(error);
    }
  };


  const save = async (userId, jobId) => {

    try {
      const userProfile = await userprofile.findOne({ userId: userId });
      if (!userProfile) {
        return false;
      }
      const savedJobs = userProfile.savedjobs;
      if (!savedJobs.includes(jobId)) {
        savedJobs.push(jobId);
        userProfile.savedjobs = savedJobs;
        await userProfile.save();
        return true;
      }
      return false;
    } catch (error) {
      console.log(error, "error");
      return false;
    }
  };

  const userSavedjob = async (userId) => {
    try {
      const user = await userprofile.findOne({ userId: userId })
        .populate({
          path: 'savedjobs',
          populate: {
            path: 'recruiterId',
            select: 'companyname image name',
            model: 'recruiter'
          }
        });
      console.log(user.savedjobs, "saved");

      return user.savedjobs;
    } catch (error) {
      console.error(error);
    }
  };



  const removejob = async (userId, jobId) => {
    try {
      const userProfile = await userprofile.findOne({ userId: userId });
      if (!userProfile) {
        return false;
      }
      const savedJobs = userProfile.savedjobs;
      const index = savedJobs.indexOf(jobId);
      if (index !== -1) {
        savedJobs.splice(index, 1);
        userProfile.savedjobs = savedJobs;
        await userProfile.save();
        return true;
      }
      return false;
    } catch (error) {
      console.log(error, "error");
      return false;
    }
  };



  const Updateprofile = async (userdata, userId) => {
    const profile = await userprofile.findOneAndUpdate(
      { userId: userId },
      {
        name: userdata?.getname(),
        email: userdata?.getemail(),
        phone: userdata?.getphone(),
        about: userdata?.getabout(),
        education: userdata?.geteducation(),
        language: userdata?.getlanguage(),
        personalwebsite: userdata?.getwebsite(),
        location: userdata?.getlocation(),
        jobRole: userdata?.getjobrole(),
        image: userdata?.getimage(),
        cv: userdata?.getcv(),
      },
      { new: true }
    );

    console.log(profile, "updation");
    return profile;
  };




  const changestatus = async (userId, jobId, status) => {
    console.log(userId, jobId, status);

    try {
      const userProfile = await userprofile.findOne({ userId:jobId });
      console.log(userProfile);
      if (userProfile) {
        const appliedJobs = userProfile.appliedjobs;
        const updatedJobs = appliedJobs.map((job) => {
          if (job._id.toString() === userId) {
            return { ...job, status };
          }
          return job;
        });
        userProfile.appliedjobs = updatedJobs;
        await userProfile.save();
      }
    } catch (error) {
      console.error(error);
    }
  };
  




  return {
    create,
    userProfile,
    apply,
    userAppliedjob,
    save,
    userSavedjob,
    removejob,
    Updateprofile,
    changestatus
  }

}
export default userprofileRepositoryImp