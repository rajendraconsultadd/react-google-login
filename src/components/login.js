import {GoogleLogin} from 'react-google-login';

function login(prop) {
    // const onSuccess = (res) => {
    //     console.log("Login SUCCESS!!! ", res);
    // }
   //832868424118-900ggld30dju6acbeqplge4m8p5v1cim.apps.googleusercontent.com
    const onFailure = (res) => {
        console.log("Login FAILED!!! ", res);
    }

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={'710587540007-1ar0upq19gfvt1o69kqkqj89jj47a97p.apps.googleusercontent.com'}
                buttonText={prop.buttonText}
                onSuccess={prop.success}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    );
}

export default login;