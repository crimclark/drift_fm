import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Tone from 'tone';
import './App.css';

import Results from './components/sample/Results';
import Nav from './components/nav/Nav';
import Login from './components/login/Login';
import Welcome from './components/welcome/Welcome';
import Chords from './components/chords/Chords';
import Melody from './components/melody/Melody';
import Sample from './components/sample/Sample';
import Global from './components/Global';

import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
class App extends Component {
  componentWillMount() {
    Tone.Transport.bpm.value = 60;
    Tone.Transport.start('+0.5');
  }

  render() {
    const { userStore: { loggedIn, guest } } = this.props;

    return (
      <Router basename="/drift_fm">
        <div className="App">
          <Nav showNav={loggedIn || guest}/>
          <Route render={({ location }) =>
            <TransitionGroup>
              <CSSTransition
                classNames="fade"
                timeout={300}
                key={location.key}
              >
                <Switch location={location}>
                  <Route
                    exact path="/"
                    children={() => (
                    loggedIn || guest
                      ? <Welcome/>
                      : <Login/>
                    )}
                  />
                  <Route path="/chords" component={Chords}/>
                  <Route path="/melody" component={Melody}/>
                  <Route path="/sample" component={Sample}/>
                  <Route path="/global" component={Global}/>
                  <Route path="/sample/search" component={Results}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          } />
        </div>
      </Router>
    );
  }
}

export default App;
