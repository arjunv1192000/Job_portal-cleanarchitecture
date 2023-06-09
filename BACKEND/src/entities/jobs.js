
const newjobdata=(recruiterId,jobTitle, jobType,jobLevel, jobTiming,about, essentialKnowledge,location, qualification, salary, date, experience,address,opening)=>{
    return{
        getrecruiterid:()=>recruiterId,
        getjobTitle:()=>jobTitle,
        getjobType:()=>jobType,
        getjobLevel:()=>jobLevel,
        getjobTiming:()=>jobTiming,
        getabout:()=>about,
        getessentialKnowledge:()=>essentialKnowledge,
        getlocation:()=>location,
        getqualification:()=>qualification,
        getsalary:()=>salary,
        getdate:()=>date,
        getexperience:()=>experience,
        getaddress:()=>address,
        getopening:()=>opening,
    }


}

export default newjobdata