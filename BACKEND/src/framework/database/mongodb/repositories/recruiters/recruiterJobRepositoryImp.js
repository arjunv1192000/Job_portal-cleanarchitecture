import mongoose from "mongoose"
import jobdata from "../../models/recruitermodels/jobModels.js"
import userprofile from "../../models/usermodels/userProfileModel.js"


const jobRepositoryImp = () => {

  const createnewjob = (data) => {
    const newjob = new jobdata({
      recruiterId: data?.getrecruiterid(),
      jobTitle: data?.getjobTitle(),
      jobType: data?.getjobType(),
      jobLevel: data?.getjobLevel(),
      jobTiming: data?.getjobTiming(),
      about: data?.getabout(),
      essentialKnowledge: data?.getessentialKnowledge(),
      location: data?.getlocation(),
      qualification: data?.getqualification(),
      salary: data?.getsalary(),
      date: data?.getdate(),
      experience: data?.getexperience(),
      address: data?.getaddress(),
      opening: data?.getopening(),
      expiring: false,
      skills: data?.getskills(),
      enddate: data?.getenddate(),


    })
    return newjob.save()
  }
  const recruiterjobs = async (recruiterId) => {

    return await jobdata.find({ recruiterId: recruiterId })
  }
  const singlejob = async (jobId) => {


    const jobs = await jobdata.findById(jobId)

    return jobs
  }

  const Updatejob = (data, jobId) => {
    console.log(data);
    return jobdata.findByIdAndUpdate(
      jobId,
      {
        recruiterId: data?.getrecruiterid(),
        jobTitle: data?.getjobTitle(),
        jobType: data?.getjobType(),
        jobLevel: data?.getjobLevel(),
        jobTiming: data?.getjobTiming(),
        about: data?.getabout(),
        essentialKnowledge: data?.getessentialKnowledge(),
        location: data?.getlocation(),
        qualification: data?.getqualification(),
        salary: data?.getsalary(),
        date: data?.getdate(),
        experience: data?.getexperience(),
        address: data?.getaddress(),
        opening: data?.getopening(),
      }, { new: true });
  };


  const jobApplicants = async (jobId) => {
    jobId = new mongoose.Types.ObjectId(jobId)
    try {
      const job = await jobdata.aggregate([
        {
          $match: { _id: jobId }
        },
        {
          $lookup: {
            from: 'userprofiles',
            localField: 'applicants',
            foreignField: 'userId',
            as: 'applicantProfiles'
          }
        }
      ]);

      console.log(job[0].applicantProfiles);
      return job[0].applicantProfiles;
    } catch (error) {
      console.error(error);
    }
  };

  const changestatus = async (jobId) => {
    try {
    
      const job = await jobdata.findById(jobId);

      if (!job) {
       
        throw new Error('Job not found');
      }

     
      job.expiring =true;
      const updatedJob = await job.save();

      return updatedJob;
    } catch (error) {
      throw error;
    }
  };








  return {
    createnewjob,
    recruiterjobs,
    singlejob,
    Updatejob,
    jobApplicants,
    changestatus
   
  }

}
export default jobRepositoryImp