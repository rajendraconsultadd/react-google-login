import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Signup from './page/Signup';
import Login from './page/Login';
import Home from './page/Home';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from './page/dashboard';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import Sheets from './page/Sheets';
import Accounts from './page/Accounts';
import Header from './page/header';
import Footer from './page/footer'
const theme = createTheme();

function App() {
  function start() {
    gapi.cliend.init({
      clientId: '832868424118-900ggld30dju6acbeqplge4m8p5v1cim.apps.googleusercontent.com',
      scope: ""
    })
  };
  useEffect(() => {
    gapi.load('client:auth2', start);
  },[]);

  // var accessToken = gapi.auth.getToken().access_token;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/accounts' component={Accounts} />
            <Route path='/sheets' component={Sheets} />
          </Switch>
          {/* <Footer></Footer> */}
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
