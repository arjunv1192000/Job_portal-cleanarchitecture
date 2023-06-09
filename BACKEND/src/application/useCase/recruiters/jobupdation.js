import newjobdata from "../../../entities/jobs.js";
 
const Updatejob=async(recruiterId,jobTitle, jobType,jobLevel, jobTiming,about, essentialKnowledge,location, qualification, salary, date, experience,address,opening,jobId, repositories)=>{

    try {
        const jobdetails = newjobdata(recruiterId,jobTitle, jobType,jobLevel, jobTiming,about, essentialKnowledge,location, qualification, salary, date, experience,address,opening)
           console.log(jobdetails,"usecase");

        const job = await repositories.Updatejob(jobdetails,jobId)
        console.log(job, "jobdata");

        return { status: true}

    } catch {
        return { message: 'Error updating job', status: false };

    }

}
export default Updatejob