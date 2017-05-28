import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProfileList from './components/profile-list/profile_list';
import ProfileForm from './components/profile-form/profile_form';
import Navbar from './components/nav-bar/nav_bar';
import DATA from './data';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DATA
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Navbar} />
          <Route exact path="/" render={() => <ProfileList data={DATA} />} />
          <Route exact path="/update_form" component={Navbar} />
          <Route exact path="/update_form" component={ProfileForm} />
        </div>
      </Router>
    )
  }
}
// <Route render={() => <ProfileList data={this.state.data} />}>
