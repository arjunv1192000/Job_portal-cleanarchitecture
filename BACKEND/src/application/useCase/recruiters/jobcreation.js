import newjobdata from "../../../entities/jobs.js";
 
const newjob=async(recruiterId,jobTitle, jobType,jobLevel, jobTiming,about, essentialKnowledge,location, qualification, salary, date, experience,address,opening,enddate,skills, repositories)=>{

    try {
        const jobdetails = newjobdata(recruiterId,jobTitle, jobType,jobLevel, jobTiming,about, essentialKnowledge,location, qualification, salary, date, experience,address,opening,enddate,skills)

          console.log(jobdetails);
        const job = await repositories.createnewjob(jobdetails)
        console.log(job, "jobdata");

        return { status: true}

    } catch {
        return { message: 'Error creating job', status: false };

    }

}
export default newjob