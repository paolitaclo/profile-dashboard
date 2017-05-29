import React, { Component } from 'react';
import axios from 'axios';

import ProfileList from './components/profile-list/profile_list';
import ProfileForm from './components/profile-form/profile_form';
import Navbar from './components/nav-bar/nav_bar';
import LogInForm from './components/logIn-form/logIn_form';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      loggedUser: undefined,
      page: 'profiles',
    };
    // this.loadProfileFromServer = this.loadProfileFromServer.bind(this);
  }

  loadProfileFromServer = () => {
    return axios.get('http://localhost:3001/api/users')
      .then(res => this.setState({ profiles: res.data })
    );
  }


  logIn = (event, username) => {
    event.preventDefault();
    console.log(event);
    console.log('this is this.state.username: ', this.state.username);
    return axios
    .get('http://localhost:3001/api/users')
    .then((res) => {
      // let arr = res.data;
      console.log(res.data);
      let filtered = res.data.filter((obj) => obj.username === username);
      console.log('filtered:', filtered);
      if (filtered.length === 1) {
        this.setState({ loggedUser: filtered[0], page: 'profiles' });
        console.log(this.state.loggedUser);
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
    console.log('info to edit: ', information);
    console.log('this is userID ', userId);
    return axios
    .put(`http://localhost:3001/api/users/${userId}`, information)
    .then((res) => {
      this.loadProfileFromServer();
      this.setState({page: 'profiles', loggedUser: res.data});
    })
    .catch(err => {
      console.log(err);
    });
  }

  componentDidMount() {
    console.log('componentDiMount');
    this.loadProfileFromServer().then((response) => {
      console.log(response);
    });
  }

  setPage = (page) =>{
    console.log('page: ', page);
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
