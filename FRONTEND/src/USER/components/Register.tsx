
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import axios from "../../axios/axios";
import { useNavigate } from "react-router-dom";
import validationSchema from '../../USER/components/validation/Registervalidation';
import { LoginSocialGoogle } from 'reactjs-social-login';
import { GoogleLoginButton } from 'react-social-login-buttons'
import GoogleIcon from '@mui/icons-material/Google';
import Divider from '@mui/material/Divider';
import toast, { Toaster } from 'react-hot-toast';


type googleinfo = {
    provider: string,
    data: any
}


interface FormValues {
    name: string;
    password: string;
    email: string;
    phone: string;
    confirmPassword: string;
}

function SignUp() {

    const [error, setError] = useState(null)
    const navigate = useNavigate();



    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',

        } as FormValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);



            const body = {
                name: values.name,
                email: values.email,
                phone: values.phone,
                password: values.password,
                confirmPassword: values.confirmPassword,
            };
            axios.post("/api/v1/user/signup", body).then((response) => {
                if (response.data.status == true) {

                    navigate("/")

                } else {
                    toast.error(response.data.message)
                    setTimeout(()=>{
                        navigate("/user/login")

                    },1500)

                }


            }).catch((response) => {
                console.error(response.message);

                navigate("/login")

            })

        },

    });

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
              
                <Typography
                    component="h1"
                    variant="h5"
                    sx={{ fontSize: 12, fontWeight: 500, color: 'blue', marginBottom: 4 }}
                >
                    Register
                </Typography>
                <Typography component="h1" variant="h5">
                    Start for free Today
                </Typography>
                <Box>
                    <LoginSocialGoogle
                        client_id={"18104366941-i704jcmbs4sg1926l716a85iqogl0se2.apps.googleusercontent.com"}
                        scope="openid profile email"
                        discoveryDocs="claims_supported"
                        access_type="offline"
                        onResolve={({ provider, data }: googleinfo) => {
                           

                             const body={
                                name:data.name,
                                email:data.email
                             }
                             console.log(body);
                             

                             axios.post('/api/v1/user/googlesignup',body).then((response)=>{
                                console.log(("data poyiii"));
                                
                                if(response.data.status===true){
                                    navigate('/')
                                }else{
                                    toast.error(response.data.message)
                                    setTimeout(()=>{
                                        navigate("/user/login")

                                    },1500)
                                   

                                }

                             }).catch((response) => {
                                console.error(response.message);
                
                            })


                             

                        }}
                        onReject={(err: any) => {
                            console.log(err);
                        }}
                    >
                     
                        <Button variant="outlined" startIcon={<GoogleIcon />} sx={{ mt: 3, mb: 2, height: 50, width: "100%", color: "black", outlineColor: "black" }} >
                            SignUp With Google
                        </Button>
                    </LoginSocialGoogle>

                </Box>


                <Divider >Or Continue with</Divider>
                <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ paddingLeft: 30 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        sx={{ width: '60%' }}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        sx={{ width: "60%" }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label="phone"
                        name="phone"
                        autoComplete="phone"
                        autoFocus
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                        sx={{ width: "60%" }}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        sx={{ width: "60%" }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="confirmPassword"
                        label="confirmPassword"
                        name="confirmPassword"
                        autoComplete="confirmPassword"
                        autoFocus
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        sx={{ width: "60%" }}
                    />


                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, height: 60, width: '60%', backgroundColor: '#131392' }}
                    >
                        Submit & Register
                    </Button>
                    <Grid container justifyContent="space-around"
                        alignItems="center">

                        <Link href="#" variant="body2" onClick={() => navigate('/user/login')}>
                            {"Don't have an account? Sign Up"}
                        </Link>

                    </Grid>

                </Box>
            </Box>
         
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </Container>
    );
}

export default SignUp;
