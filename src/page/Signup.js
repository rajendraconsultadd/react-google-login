import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from "axios";
import { useHistory } from "react-router-dom";
import SignUpButton from "../components/login";

export default function Signup() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState(""); 
    const [cpassword,setCpassword] = useState("");

    let history = useHistory();

    const registration = (e) =>{
        e.preventDefault();
        if (email !== '' && password !== '') {
            if (password === cpassword) {
                UserSignup({ email: email, password: password, isGoogleAuth: false });
            }
            else {
                console.log("password and confirm password not match");
            }
        }
    }
    
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     if (data.get('email') !== '' && data.get('password') !== '') {
    //         if (data.get('password') === data.get('cpassword')) {
    //             UserSignup({ email: data.get('email'), password: data.get('password') })
    //         }
    //         else {
    //             console.log("password and confirm password not match");
    //         }
    //     }
    // };
    const sigunupGoogleSuccess = (childData) =>{
        UserSignup({ email:childData.profileObj.email, password:childData.accessToken , isGoogleAuth:true});
    }
    function UserSignup(data) {
        axios
            .post('http://localhost:5600/signup', data)
            .then((response) => {
                history.push('/login');
            }).catch(error => console.log(error));
    }
    return (
        <Container component="main" maxWidth="xs" >
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" style={{ 'maxWidth': '600px', 'width': '100%' }}  noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="cpassword"
                        value={cpassword}
                        onChange={(e) => setCpassword(e.target.value)}
                        label="Confirm Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={registration}
                    >
                        Sign up
                    </Button>
                    <Grid container style={{ 'justifyContent': 'center' }}>
                        <Grid item>
                            <Link href="/login" variant="body2">
                                {"Already have an account? Login"}
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            OR
                        </Grid>
                        <Grid item xs={12}>
                            <SignUpButton buttonText="Sign up with Google" success={sigunupGoogleSuccess} />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}