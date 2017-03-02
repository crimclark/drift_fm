import React from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  if (response.error) {
    throw response.error;
  } else {
      const {tokenId, profileObj: {email, givenName}} = response;
      console.log(response);
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
      })
  }
}

const Login = () => {
  const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  return (
    <GoogleLogin
      clientId={client_id}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      className="pure-button"
    />
    )
}

export default Login;
