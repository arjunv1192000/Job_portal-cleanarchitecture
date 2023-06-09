const getallsearchjobs = async (repositories, page, query) => {
    try {
      console.log(page, query);
      const jobdata = await repositories.getalljobs();
      const job = jobdata.jobs;
      const totalCount = jobdata.totalCount;
      const keys = ['jobTitle', 'jobType', 'location', 'jobTiming'];
  
      const search = (job) => {
        return job.filter((item) =>
          keys.some((key) => item[key].toLowerCase().includes(query))
        );
      };
  
      let alljobs = job;
      if (query) {
        alljobs = search(job);
      }
  
      const countofjob = alljobs.length;
      console.log(countofjob);
  
      const limit = 4;
      const skipNumber = parseInt((page - 1) * limit);
      const paginatedData = (skip, limit) => {
        const skippedData = alljobs.slice(skip);
        const limitedData = skippedData.slice(0, limit);
        return limitedData;
      };
  
      const jobs = paginatedData(skipNumber, limit);
  
      return { status: true, jobs, countofjob };
    } catch (err) {
      return { message: 'Error getting selection of all jobs', status: false, err };
    }
  };
  
  export default getallsearchjobs;
  