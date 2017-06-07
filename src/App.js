import React, { Component } from 'react';
import axios from 'axios';

import ProfileList from './components/profile-list/profile_list';
import ProfileForm from './components/profile-form/profile_form';
import Navbar from './components/nav-bar/nav_bar';
import LogInForm from './components/logIn-form/logIn_form';

const SERVER = 'http://localhost:3001';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      loggedUser: undefined,
      page: 'profiles',
    };
  }

  loadProfileFromServer = () => {
    return axios.get(`${SERVER}/api/users`)
      .then(res => this.setState({ profiles: res.data })
    );
  }


  logIn = (event, username) => {
    event.preventDefault();
    return axios
    .get(`${SERVER}/api/users`)
    .then((res) => {
      let filtered = res.data.filter((obj) => obj.username === username);
      if (filtered.length === 1) {
        this.setState({ loggedUser: filtered[0], page: 'profiles' });
      }
    });
  }

  updateUserProfile = (event, user, description, imageUrl) => {
    let information = {
      user,
      description,
      imageUrl
    }
    event.preventDefault();
    const userId = this.state.loggedUser._id;
    return axios
    .put(`${SERVER}/api/users/${userId}`, information)
    .then((res) => {
      this.loadProfileFromServer();
      this.setState({page: 'profiles', loggedUser: res.data});
    })
    .catch(err => {
      console.log(err);
    });
  }

  componentDidMount() {
    this.loadProfileFromServer();
  }

  setPage = (page) =>{
    this.setState({ page });
  }

  render() {
    let currentPage;
    switch (this.state.page) {
      case 'profiles':
        currentPage = <ProfileList profiles={this.state.profiles}/>;
        break;
      case 'edit':
      currentPage = <ProfileForm loggedUser={this.state.loggedUser} onSubmit={this.updateUserProfile}/>;
      break;
      case 'login':
      currentPage = <LogInForm onSubmit={this.logIn}/>;
    }

    return (
      <div>
        <Navbar loggedUser={this.state.loggedUser} setPage={this.setPage}/>
        {currentPage}
      </div>
    )
  }
}
