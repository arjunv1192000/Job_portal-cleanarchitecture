import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Box, Stack, Grid, Container, TextField, Typography, MenuItem } from '@mui/material';
import Footer from '../components/Footer';
import Background from '../components/Background';
import SideBar from '../components/SideBar.tsx';
import Jobposts from '../components/Jobposts.tsx';
import axios from '../utils/axios.ts';
import Pagination from '@mui/material/Pagination';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';




type Jobs = {
  _id: string;
  jobTitle: string;
  jobType: string;
  location: string;
  salary: string;
  date: string;
  about: string;
  recruiterId: {
    image: string;
    companyname: string;
    recruiterId: string;
    _id: string;

  }
  expiring: boolean;
  skills: [string]
};

function Jobspage() {
  const [alljobs, setAllJobs] = useState<Jobs[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(4);
  const [totalCount, setTotalCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [query, setQuery] = useState<string>('');
  const [filter, setFilter] = useState('');
  const [filterlocation, setFilterlocation] = useState('');
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));


  useEffect(() => {
    const getJobData = async () => {
      try {
        const response = await axios.get('/jobs/getalljobssearch', {
          params: {
            page: currentPage,
            query: query,
            filter: filter,
            location: filterlocation,
          },
        });

        const { jobs, countofjob } = response.data;
        console.log(jobs, "jooooooooooo");

        setAllJobs(jobs);
        setTotalCount(countofjob);
        const calculatedPageCount = Math.ceil(countofjob / jobsPerPage);
        setPageCount(calculatedPageCount);
      } catch (error) {
        console.error(error.message);
      }
    };

    getJobData();
  }, [currentPage, query, filter, filterlocation]);

  const handlePageChange = (event: any, page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box>
      <Stack>
        <Header />
        <Background />
        <Box
          sx={{
            width: '95%',
            height: 'auto',
            borderRadius: 6,
            backgroundColor: 'white',
            marginLeft: 5,
            marginTop: 40,
            boxShadow: 6,
            zIndex: 1,
            '@media (max-width: 800px)': {
              width: 900, marginTop: 30, marginLeft: 2
            },
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              mt: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
              type="search"
              id="search"
              label="Search"
              onChange={(e) => setQuery(e.target.value)}
              sx={{ width: 600 }}
            />
          </Container>
          <Stack direction={isMobile ? 'column' : 'row'} sx={{ marginTop: 10, marginLeft: 3 }} spacing={1}>
            <Stack spacing={2} >
              <SideBar />


              <TextField
                select
                label="Filter by Job Type"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                sx={{ width: 300 }}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Fulltime">Full-time</MenuItem>
                <MenuItem value="Parttime">Part-time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
                <MenuItem value="Intern">Intern</MenuItem>

              </TextField>

              <TextField
                select
                label="Filter by Location"
                value={filterlocation}
                onChange={(e) => setFilterlocation(e.target.value)}
                sx={{ width: 300 }}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Kochi">Kochi</MenuItem>
                <MenuItem value="Bangalore">Bangalore</MenuItem>
                <MenuItem value="Kozhikode">Kozhikode</MenuItem>
                <MenuItem value="Trivandrum">Trivandrum</MenuItem>
                <MenuItem value="Kolkata">Kolkata</MenuItem>
                <MenuItem value="Gurgaon">Gurgaon</MenuItem>
                <MenuItem value="Delhi">Delhi</MenuItem>
                <MenuItem value="Mumbai">Mumbai</MenuItem>
                <MenuItem value="Gujarat">Gujarat</MenuItem>
                <MenuItem value="Goa">Goa</MenuItem>

              </TextField>

            </Stack>


            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ padding: 1 }}>
              {alljobs.length === 0 ? (
                <Box sx={{ textAlign: 'center', padding: '1rem' }}>
                  <Typography variant="h5">No jobs found</Typography>
                </Box>
              ) : (
                alljobs.map((job) => (
                  <Jobposts
                    key={job._id}
                    id={job.recruiterId._id}
                    jobtitle={job.jobTitle}
                    jobType={job.jobType}
                    location={job.location}
                    date={job.date}
                    salary={job.salary}
                    jobId={job._id}
                    about={job.about}
                    image={job.recruiterId.image}
                    companyname={job.recruiterId.companyname}
                    expiring={job.expiring}
                    skills={job.skills}
                  />
                ))
              )}
            </Grid>
          </Stack>

          {alljobs.length > 0 && (
            <Pagination
              count={pageCount}
              page={currentPage}
              shape="rounded"
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 2 }}
              onChange={handlePageChange}
            />
          )}
        </Box>

        <Footer />
      </Stack>
    </Box>
  );
}

export default Jobspage;
