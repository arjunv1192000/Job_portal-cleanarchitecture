import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GoogleIcon from '@mui/icons-material/Google';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function SignIn() {
    //   const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //       email: data.get("email"),
    //       password: data.get("password"),
    //     });
    //   };

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
                    Register
                </Typography>
                <Typography component="h1" variant="h5">
                Registration for Recruiters
                </Typography>
               
                <Box component="form" noValidate sx={{paddingLeft:30 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Company name "
                        label="Company name "
                        name="Company name "
                        autoComplete="Company name "
                        autoFocus
                        sx={{width:"60%",}}
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
                        sx={{width:"60%"}}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        sx={{width:"60%"}}
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
                        sx={{width:"60%"}}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Re-password"
                        label="Re-password"
                        name="Re-password"
                        autoComplete="Re-password"
                        autoFocus
                        sx={{width:"60%"}}
                    />

                    <Button type="submit"  variant="contained" sx={{ mt: 3, mb: 2, height: 60,width:"60%" ,backgroundColor:'#131392', }} >
                        Submit&Register
                    </Button>
                    <Grid container paddingLeft={9}>

                        <Link href="#" variant="body2">
                            {"Already have an account?Login"}
                        </Link>

                    </Grid>
                </Box>
            </Box>
            <Box
                component="img"
                sx={{
                    height: 350,
                    width: 700,
                    maxHeight: { xs: 350, md: 250 },
                    maxWidth: { xs: 450, md: 350 },
                }}
                alt=""
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-2.svg"
            />
            
        </Container>
    );
}