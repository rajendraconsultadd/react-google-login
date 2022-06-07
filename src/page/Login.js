import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from "axios";
import { useHistory } from "react-router-dom";
import LoginButton from "../components/login";
import {useDispatch } from 'react-redux';
import {setLogin,setLoginBYGoogle} from '../action/action';
export default function Login() {
  let history = useHistory();
  let dispatch=useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(data.get('email')!=='' && data.get('password')!==''){
        UserLogin({email:data.get('email'),password: data.get('password')},'login')
    }
  };
  const loginGoogleSuccess = (childData) =>{
    UserLogin({ email:childData.profileObj.email, password:childData.accessToken},'googleLogin');
}
  function UserLogin(data,type) {
    axios
      .post('http://localhost:5600/login',data)
      .then((response) => {
        type=='login' ? dispatch(setLogin()) : dispatch(setLoginBYGoogle())        
        sessionStorage.setItem('email',response.data.data.email)
        sessionStorage.setItem('id',response.data.data._id)
        history.push('/dashboard');
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
            Login
          </Typography>
          <Box component="form" style={{'maxWidth':'600px','width':'100%'}} onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                OR
              </Grid>
              <Grid item xs={12}>
                <LoginButton buttonText="Login with Google" success={loginGoogleSuccess}/>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}