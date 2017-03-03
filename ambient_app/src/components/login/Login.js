import React from 'react';
import GoogleLogin from 'react-google-login';
import './login.css'


const Login = ({setLoggedIn}) => {

  const responseGoogle = (response) => {
    if (response.error) {
      throw response.error;
    } else {
        const {tokenId, profileObj: {email, givenName}} = response;
        fetch('/songs', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token: tokenId,
            email: email,
            name: givenName
          })
        }).then( song => song.json() )
          .then( song => {
            setLoggedIn(song);
          })
    }
  }

  const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  return (
    <div className="login">
      <GoogleLogin
        clientId={client_id}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        className="pure-button"
      />
    </div>
    )
}

export default Login;
