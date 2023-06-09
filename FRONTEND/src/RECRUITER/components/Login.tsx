import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import axios from '../utils/axios'
import validationSchema from "./validation/Loginvalidation";
import { useDispatch } from "react-redux";
import {login} from '../../redux/reducer/recruiterSlice'



interface FormValues {
    email: string;
    password: string;


}


export default function SignIn() {
   
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const formik = useFormik({
        initialValues: {

            email: '',
            password: '',


        } as FormValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);



            const body = {

                email: values.email,
                password: values.password,

            };
            console.log(body);

            axios.post("/login", body).then((response) => {
                console.log(response);

                if (response.data.status == true) {
                    localStorage.setItem('access_token_recruiter', response.data.AccessToken)
                    localStorage.setItem('refresh_token_recruiter', response.data.RefreshToken)
                    dispatch(login({id:response.data.isRecruiter.recruiterId ,companyname:response.data.isRecruiter.recruiterCompany, name: response.data.isRecruiter.recruiterName,email: response.data.isRecruiter.recruiterEmail,image:response.data.isRecruiter.recruiterImage,jwt:response.data.AccessToken}))

                    navigate("/recruiter/dashboard")

                } else {
                    toast.error("Invalid email or password")


                }


            }).catch((response) => {
                console.error(response.message);

               

            })

        },

    });

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    component="img"
                    sx={{
                        height: 233,
                        width: 350, marginLeft: 80,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt=""
                    src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-4.svg"
                />
                <Typography component="h1" variant="h5" sx={{ fontSize: 12, fontWeight: 500,color:"blue",marginBottom:4 }}>
                    Welcome back!
                </Typography>
                <Typography component="h1" variant="h5" sx={{ fontSize: 24, fontWeight: 1000 }}>
                Recruiters  Login
                </Typography>
               
              
               
                <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{paddingLeft:20 }}>
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
                        sx={{width:"70%",}}
                       

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
                        sx={{width:"70%",}}
                        
                    />

                    <Button type="submit" fullWidth variant="contained"  sx={{ mt: 5, mb: 2, height: 60, width: { xs: '100%', md: '70%' }, backgroundColor: '#131392' }} >
                        Login
                    </Button>
                    <Grid paddingLeft={10}>

                        <Link href="#" variant="body2" onClick={() => navigate('/recruiter/signup')}>
                            {"Don't have an account? Sign Up"}
                        </Link>

                    </Grid>
                </Box>
            </Box>
            <Box
                component="img"
                sx={{
                    height: 250,
                    width: 350,
                    maxHeight: { xs: 250, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                }}
                alt=""
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-3.svg"
            />
             <Toaster
                position="top-center"
                reverseOrder={false}
            />

        </Container>
    );
}