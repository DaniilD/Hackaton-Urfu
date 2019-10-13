import React, { Component } from 'react';


class Auth extends Component {

	componentWillMount() {
		console.log("token"+document.location.hash);
		//let token = /access_token=([^&]+)/.exec(document.location.hash)[1]
		//console.log('token1:',token)
		let token = "AgAAAAA5XH41AAXoIGXT6XAJlkbNuhSuhJ3pYEo";
		document.cookie = 'token=' + token;
		document.location.href = '/list/';
	}
  render() {
    return (

      <div />
    );
  }
}

export default Auth;
