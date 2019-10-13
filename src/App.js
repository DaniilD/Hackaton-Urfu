import React, { Component } from 'react';
import './App.css';
import Cookies from 'js-cookie';


class App extends Component {

	componentDidMount() {
		let token = "AgAAAAA5XH41AAXoIGXT6XAJlkbNuhSuhJ3pYEo";
		
		if (token == null) {
			console.log("go");
			document.location.href = 'https://oauth.yandex.ru/authorize?response_type=token&client_id=ffca513c71054c12839b3d27ebc18b9a';
		} 
	}
	
	render() {
		return(
			(document.location.pathname ==  '/') ?
			<div class="content">
			<div class="container-fluid">
					<div class="row">
						<div class="col-xl-4 offset-xl-4">
							<div class="form text-center">
								<div class="form_logo logo">
									<span class="funf"><span class="F">F</span>unfiriki</span><span class="drive">.Диск</span>
								</div>
								<div class="image">
									<img src="https://sun3-12.userapi.com/c850528/v850528187/1697aa/e1NosmFly2M.jpg?ava=1" alt=""/>
								</div>
								<a href = {"/list/"} ><div class="form_submit">Перейти к диску</div></a>
							</div>
						</div>
					</div>
			</div>
		</div>
		: null
		);
	}
}

export default App;


/*
		return (
		  <div className="App">
			  
			<a href = {"/list/"} >{(document.location.pathname ==  '/') ? 'мои файлы' : null}</a>	
		  </div>
		);
*/