import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import Loading from './Loading';
import './login.css'
const server = process.env.REACT_APP_SERVER;

class Login extends Component {

  constructor() {
    super();
    this.state = {
      loading: false,
      active: 'inactive'
    }
    this.responseGoogle = this.responseGoogle.bind(this);
    this.handleGuestClick = this.handleGuestClick.bind(this);
  }

  // wake up heroku
  componentDidMount() {
    fetch(`${server}/songs`);
  }

  responseGoogle(response) {
    if (response.error) {
      throw response.error;
    } else {
        this.setState({
          loading: true,
          active: 'active'
        })
        const {tokenId, profileObj: {email, givenName}} = response;

        // prod route //
        // const route = `${server}/songs`;

        // dev route //
        const route = '/songs';

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

  handleGuestClick() {
    this.props.setGuest();
  }

  render() {
    let loading;
    if (this.state.loading) {
      loading = <Loading />
    }

    const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    return (
      <div className="landing">
        <h1 className="title">DRIFT.FM</h1>
        <p id="landing-text">An ambient music generator built with Tone.js and React.</p>
          <div className={this.state.active} id="googlelogin">
            <GoogleLogin
              clientId={client_id}
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              className="pure-button"
              id="login"
            />
            <label htmlFor="login">Login with Google</label>
          </div>
          <div className={this.state.active} id="guestlogin">
            <button className="pure-button" id="guest-btn" onClick={this.handleGuestClick}>Guest</button>
            <div id="guestlabel">
              <label htmlFor="guest">Login as Guest
              <span id="disable-message">(Saving Disabled)</span></label>
            </div>
          </div>
        {loading}
      </div>
    )
  }
}

export default Login;



