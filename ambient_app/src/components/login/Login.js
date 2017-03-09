import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import Heading from './Heading';
import Loading from './Loading';
import './login.css'


// const Login = ({setLoggedIn}) => {

  // const responseGoogle = (response) => {
  //   if (response.error) {
  //     throw response.error;
  //   } else {


  //       // loading message while heroku is loading //
  //       console.log('loading song');


  //       const {tokenId, profileObj: {email, givenName}} = response;
  //       const server = process.env.REACT_APP_SERVER;

  //       // prod route //
  //       const route = `${server}/songs`;

  //       // dev route //
  //       // const route = '/songs';

  //       fetch(route, {
  //         method: 'POST',
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({
  //           token: tokenId,
  //           email: email,
  //           name: givenName
  //         })
  //       }).then( song => song.json() )
  //         .then( song => {
  //           setLoggedIn(song);
  //         })
  //   }
  // }

//   const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;

//   return (
//     <div>
//       <Heading />
//       <div className="login">
//         <GoogleLogin
//           clientId={client_id}
//           buttonText="Login"
//           onSuccess={responseGoogle}
//           onFailure={responseGoogle}
//           className="pure-button"
//         />
//       </div>
//     </div>
//     )
// }

// export default Login;


class Login extends Component {

  constructor() {
    super();
    this.state = {
      loading: false
    }
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseGoogle(response) {


    if (response.error) {
      throw response.error;
    } else {

        this.setState({
          loading: true
        })

        // loading message while heroku is loading //
        console.log('loading song');


        const {tokenId, profileObj: {email, givenName}} = response;
        const server = process.env.REACT_APP_SERVER;

        // prod route //
        const route = `${server}/songs`;

        // dev route //
        // const route = '/songs';

        fetch(route, {
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
            this.props.setLoggedIn(song);
          })
    }
  }



  render() {
    var loading;
    if (this.state.loading) {
      loading = <Loading />
    }

    const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    return (
      <div className="landing">
        <h1 className="title">DRIFT.FM</h1>
        <p id="landing-text">An ambient music generator built with Tone.js and React.</p>
          <GoogleLogin
            clientId={client_id}
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            className="pure-button"
          />
        {loading}
      </div>
      )
  }
}

export default Login;



