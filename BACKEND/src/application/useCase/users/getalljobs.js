const getalljobs = async (repositories, page) => {
    console.log("usecase");

    try {
        const jobdata = await repositories.getalljobs();
        const job = jobdata.jobs;
        const totalCount = jobdata.totalCount;
        const limit=4
        const skipNumber=parseInt((page-1)*limit)
        const paginatedData=(skip,limit)=>{
            const skippedData=job.slice(skip)
            const limitedData=skippedData.slice(0,limit)
            return limitedData

        }
        const jobs=paginatedData(skipNumber,limit)

      
      

        return { status: true, jobs,totalCount };

    } catch (err) {
        return { message: 'Error getting selection of all jobs', status: false, err };
    }
};

export default getalljobs;
