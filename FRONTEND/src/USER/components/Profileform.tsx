import React from 'react';
import { Box, Stack, TextField, Button, Grid, Avatar, Typography } from '@mui/material';
import { useFormik } from 'formik';
import validationSchema from './validation/Profileformvalidation';
import { useNavigate } from 'react-router-dom';
  import Axios from '../../axios/axios.ts';
import { useSelector } from "react-redux";
import axios from '../utils/axios.ts'
import { useDispatch } from "react-redux";
import { addprofile } from '../../redux/reducer/userProfileSlice.ts';


type RootState = {
  user: {
    value: {
      id: string | null;
      name: string | null;
      email: string | null;
      image: string | null;
      access_token: string;
    };
  };
};





interface MyFormData {
  name: string;
  email: string;
  phone: string;
  about: string;
  personalWebsite: string;
  education: string;
  language: string; 
  jobRole: string;
  location: string;
  cv: File | null;
  image: File | null;
  userimage: string;
  usercv: string;
}

function Profileform() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userdata = useSelector((state: RootState) => state.user.value);


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      about: '',
      personalWebsite: '',
      education: '',
      language: '',
      jobRole: '',
      location: '',
      usercv: '',
      userimage: '',

    } as MyFormData,
    validationSchema: validationSchema,
    onSubmit:async (values) => {
      const fileimg = values.image;
  const filecv = values.cv;

  console.log(fileimg, filecv);

  try {
    const [imageResponse, cvResponse] = await Promise.all([
      Axios.get('/s3service'),
      Axios.get('/s3service'),
    ]);

    const imageUrl = imageResponse.data.response;
    const cvUrl = cvResponse.data.response;

    console.log(imageUrl, cvUrl);

    const imageUpload = fetch(imageUrl, {
      method: 'PUT',
      body: fileimg,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const cvUpload = fetch(cvUrl, {
      method: 'PUT',
      body: filecv,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const [imageUploadResponse, cvUploadResponse] = await Promise.all([imageUpload, cvUpload]);

    console.log('Image and CV uploaded successfully:', imageUploadResponse, cvUploadResponse);

    const userimage = imageUrl.split('?')[0];
    const usercv = cvUrl.split('?')[0];
    console.log(userimage);
    console.log(usercv);
    formik.setFieldValue('usercv', usercv);
    formik.setFieldValue('userimage', userimage);

    const body = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      about: values.about,
      personalWebsite: values.personalWebsite,
      education: values.education,
      language: values.language,
      jobRole: values.jobRole,
      location: values.location,
      cv: usercv,
      image: userimage,
      userId: userdata.id,
    };

    console.log(body);

    const response = await axios.post('/profile/addprofile', body);

    console.log(response);

    if (response.data.status === true) {
      dispatch(
        addprofile({
          id: response.data.userprofile.userId,
          name: response.data.userprofile.name,
          email: response.data.userprofile.email,
          phone: response.data.userprofile.phone,
          about: response.data.userprofile.about,
          education: response.data.userprofile.education,
          language: response.data.userprofile.language,
          location: response.data.userprofile.location,
          jobrole: response.data.userprofile.jobRole,
          image: response.data.userprofile.image,
          cv: response.data.userprofile.cv,
        })
      );
      

      navigate("/user/profile")
    }
  } catch (error) {
    console.error('Error uploading image and CV:', error);
  }


    



    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files && event.currentTarget.files[0];
    formik.setFieldValue('image', file || null);
  };

  const handleCVChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files && event.currentTarget.files[0];
    formik.setFieldValue('cv', file || null);
  };

  return (
    <Box
      sx={{
        width: '70%',
        height: 'auto',
        borderRadius: 2,
        margin: 3,
      }}
    >
      <Typography margin={5} fontSize={28} fontWeight={1000}>
        Update your profile
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 3, width: '40ch' },
          margin: 6,
        }}
        noValidate
        onSubmit={formik.handleSubmit}
        encType="multipart/form-data"
      >
        <div>
          <Avatar id="img"
            alt=""
            src=""
            sx={{ width: 80, height: 80, marginTop: 4, marginLeft: 4 }}
          />
          <Typography marginLeft={3}>Upload your profile image</Typography>
          <TextField
            margin="normal"
            required
            id="image"
            label=""
            name="image"
            type="file"
            autoFocus
            onChange={handleImageChange} // Handle file selection
            error={formik.touched.image && Boolean(formik.errors.image)}
            helperText={formik.touched.image && formik.errors.image}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Fullname"
            name="name"
            autoComplete="name"
            autoFocus
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{ width: "60%", }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="about"
            label="About"
            name="about"
            autoComplete="About"
            autoFocus
            multiline
            maxRows={4}
            value={formik.values.about}
            onChange={formik.handleChange}
            error={formik.touched.about && Boolean(formik.errors.about)}
            helperText={formik.touched.about && formik.errors.about}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phonenumber"
            name="phone"
            autoComplete="phone"
            autoFocus
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            sx={{ width: "60%", }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}

            sx={{ width: "60%", }}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="personalWebsite"
            label="personalWebsite"
            name="personalWebsite"
            autoComplete="personalWebsite"
            autoFocus
            value={formik.values.personalWebsite}
            onChange={formik.handleChange}
            error={formik.touched.personalWebsite && Boolean(formik.errors.personalWebsite)}
            helperText={formik.touched.personalWebsite && formik.errors.personalWebsite}
            sx={{ width: "60%", }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="education"
            label="Education"
            name="education"
            autoComplete="education"
            autoFocus
            value={formik.values.education}
            onChange={formik.handleChange}
            error={formik.touched.education && Boolean(formik.errors.education)}
            helperText={formik.touched.education && formik.errors.education}

          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="language"
            label="Language"
            name="language"
            autoComplete="language"
            autoFocus
            value={formik.values.language}
            onChange={formik.handleChange}
            error={formik.touched.language && Boolean(formik.errors.language)}
            helperText={formik.touched.language && formik.errors.language}



          />



          <TextField
            margin="normal"
            required
            fullWidth
            id="jobRole"
            label="Jobrole"
            name="jobRole"
            autoComplete="jobRole"
            autoFocus
            value={formik.values.jobRole}
            onChange={formik.handleChange}
            error={formik.touched.jobRole && Boolean(formik.errors.jobRole)}
            helperText={formik.touched.jobRole && formik.errors.jobRole}


          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="location"
            label="Location"
            name="location"
            autoComplete="location"
            autoFocus
            value={formik.values.location}
            onChange={formik.handleChange}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}

          />
          {/* Rest of the form fields */}
          <TextField
            margin="normal"
            required
            id="cv"
            name="cv"
            type="file"
            autoComplete="cv"
            autoFocus
            onChange={handleCVChange} // Handle file selection
            error={formik.touched.cv && Boolean(formik.errors.cv)}
            helperText={formik.touched.cv && formik.errors.cv}
          />
          {/* Submit button */}
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, height: 60, width: '60%', backgroundColor: '#131392', ml: 20 }}
          >
            Submit & Register
          </Button>
        </div>
      </Box>
    </Box>
  );
}

export default Profileform;
