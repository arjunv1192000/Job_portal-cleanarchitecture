import React from 'react'
import { Box, Stack, TextField, Button, Grid, Avatar, Typography, MenuItem,Select } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import axios from '../utils/axios'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { SelectChangeEvent } from '@mui/material/Select';
type Props = {
    userId: string;
    name: string;
    email: string;
    phone: string;
    location: string;
    jobRole: string;
    language: string;
    about: string;
    education: string;
    image: string;
    cv: string;
    jobId:string;
   
};

const Applicant: React.FC<Props> = ({ userId, name, email, phone, location, jobRole, language, about, education, image, cv,jobId }) => {
    const navigate = useNavigate();

   
    const [status, setStatus] = React.useState('Pending');

    const handleDownloadCv = () => {
        window.open(cv, '_blank');
    };
    const handleStatusChange = (event: SelectChangeEvent<string>) => {
        const newStatus=(event.target.value );
        setStatus(newStatus);
        axios.post('/jobs/updateApplicantStatus', {
            userId: userId, 
            jobId:jobId,
            status: newStatus 
          })
            .then(response => {
              console.log('Status updated successfully:', response.data);
              if(response.data.status== true){
                toast.success('Application'+newStatus +'Successfully')
              }
              
            })
            .catch(error => {
              console.error('Error updating status:', error);
              
            });

      };
    

    return (
        <Box sx={{ width: "90%", height: 350, borderRadius: 2, boxShadow: 6, backgroundColor: 'white', marginTop: 1 }}>
            <Stack direction={'row'} spacing={4}>
                <Avatar
                    alt=""
                    src={image}
                    sx={{ width: 50, height: 50, marginTop: 5, marginLeft: 3 }}
                />
                <Stack >
                    <Typography marginLeft={3} marginTop={5} fontSize={21} fontWeight={500}>
                        {name}
                    </Typography>
                    <Typography marginLeft={3} fontSize={18} fontWeight={300} marginTop={2}>
                        {jobRole}
                    </Typography>
                    <Typography marginLeft={3} fontSize={18} fontWeight={300} marginTop={2}>
                        {email}
                    </Typography>
                    <Typography marginLeft={3} fontSize={18} fontWeight={300} marginTop={2}>
                        {phone}
                    </Typography>
                    <Typography marginLeft={3} fontSize={18} fontWeight={300} marginTop={2}>
                        {location}
                    </Typography>

                    <Button sx={{ width: 200, marginTop: 4 }} startIcon={<PersonIcon />} onClick={handleDownloadCv} >
                        Download CV
                    </Button>

                </Stack>
                <Stack marginLeft={1}>
                    <Typography marginLeft={3} marginTop={5} fontSize={21} fontWeight={500}>
                        About Me
                    </Typography>
                    <Typography marginLeft={3} fontSize={18} fontWeight={300} marginTop={2} width={400}>
                        {about}
                    </Typography>
                    
                    <Button variant="contained" sx={{ width: 200, height: 40, borderRadius: 2, backgroundColor: "#3C6FF5",marginTop:19}} onClick={() =>navigate('/recruiter/chatpage')} >Chat With Applicant</Button>

                </Stack>
                <Stack marginLeft={1}>
                    <Typography marginLeft={3} marginTop={5} fontSize={18} fontWeight={500}>
                        Change Status
                    </Typography>
                    <Select value={status} onChange={handleStatusChange} sx={{ marginLeft: 3, marginTop: 2,width:180,height:40 }}>
                        <MenuItem value="Approved">Approved</MenuItem>
                        <MenuItem value="Rejected">Rejected</MenuItem>
                    </Select>
                </Stack>
                <Typography marginLeft={3} marginTop={5} fontSize={21} fontWeight={500}>
                    
                    </Typography>

            </Stack>
            <Toaster    
                position="top-center"
                reverseOrder={false}
            />


        </Box>

    )
}

export default Applicant