import React from 'react';
import Grid from '@mui/material/Grid';
import Navbar from '../components/Navbar';
import LoginButton from "../components/login";
import { Typography } from '@mui/material';
import axios from "axios";
import { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Products() {
  const [list,setList]=useState([]);
  useEffect(() => {
    subscriptionList();
   },[]);

  const subscriptionList=()=>{
    axios
    .get('http://localhost:5600/getSpecifcSubscription/'+sessionStorage.getItem('id'))
    .then((response) => {
      setList(response.data.data.subAccounts)
    }).catch(error => console.log(error));
  }
  const loginGoogleSuccess = (childData) =>{
    addSubscription({ email:childData.profileObj.email,AuthKey:childData.accessToken});
  }

  function addSubscription(data) {
    axios
      .post('http://localhost:5600/addSubscription/'+sessionStorage.getItem('email'),data)
      .then((response) => {
        subscriptionList();
      }).catch(error => console.log(error));
  }
  return (
    <div className='products'>
      <Navbar />
      <Grid container style={{'width':'calc(100% - 250px)','marginLeft':'250px','marginTop':'20px'}}>
      <Grid item xs={6} style={{'textAlign':'left','paddingLeft':'10px'}}>
      <Typography variant="h4" component="h6">
         Accounts
      </Typography>
        </Grid>
        {/* <Grid item xs={6} style={{'textAlign':'right','paddingRight':'10px'}}>
        <LoginButton buttonText="Add Account" success={loginGoogleSuccess}/>
        </Grid> */}
        <Grid item xs={12}>
        <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell >Auth Key</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.length > 0 && list.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row.email}
              </TableCell>
              <TableCell style={{'wordBreak':'break-all'}}>{row.AuthKey}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
      </Grid>
    
    </div>
  );
}

export default Products;
