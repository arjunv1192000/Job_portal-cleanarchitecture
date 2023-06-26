import jobdata from "../../models/recruitermodels/jobModels.js"



const userJobRepositoryImp = () => {

  const getalljobs = async () => {
    const totalCount = await jobdata.countDocuments();
    const jobs = await jobdata
      .find()
      .populate('recruiterId', 'companyname image name')
      .sort({ expiring: 1, date: -1 });

    return { totalCount, jobs };
  };


  const singlejob = async (jobId) => {


    const jobs = await jobdata.findById(jobId).populate('recruiterId', 'companyname image name');

    return jobs
  }


  const apply = async (userId, jobId) => {
    try {
      const userjob = await jobdata.findOne({ _id: jobId });
      if (!userjob) {
        return false;
      }
      const applicants = userjob.applicants;
      if (!applicants.includes(userId)) {
        applicants.push(userId);
        userjob.applicants = applicants;
        await userjob.save();
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };



  return {
    getalljobs,
    singlejob,
    apply
  }

}
export default userJobRepositoryImp
