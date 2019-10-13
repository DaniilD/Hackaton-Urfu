import React from 'react';
import ReactDOM from 'react-dom';
import PreLoader, {yaapi} from './components/Api';

 import {
    BrowserRouter ,
    Route} from 'react-router-dom';
	
import './index.css';
import App from './App';
import Auth from './components/Auth';
import List from './components/List';
import {createStore, bindActionCreators} from 'redux';
import {connect, Provider} from 'react-redux';
import {searchFolders} from './functions.js';
import {searchFiles} from './functions.js';
import Cookies from 'js-cookie';


//import * as serviceWorker from './serviceWorker';

	var path = document.location.pathname.replace("/list/", "");
	if (document.location.pathname == '/list/')  path = '/';
	console.log(decodeURI(path));
	yaapi( 'GET', null, { path: decodeURI(path)}, 'https://cloud-api.yandex.net/v1/disk/resources', 
		(data) => {
			main(data);
		}, (err) => {
		console.log('err:', err);
	}
	);





function main(data){
	const ACTION_CHANGE_FOLDER = 'ACTION_CHANGE_FOLDER';
	const ACTION_GO_BACK = 'ACTION_GO_BACK';
	
	
	console.log('Location: '+path);
	console.log(data);
	var response;


	//Исходное состояние
	let initialState = {
		name:data.name,
		path:"/"+decodeURI(document.location.pathname.replace("/list/", "")),
		backPath:'disk:/',
		folders:[],
		files:[]
	};

	initialState.folders = searchFolders(data);
	initialState.files = searchFiles(data);

	

	//Преобразователь
	const reducer = (state = initialState, action)=>{
		switch(action.type){
			case ACTION_CHANGE_FOLDER:
				var response = action.payload;
				var name = response.name;
				var folders = searchFolders(response);
				var files = searchFiles(response);
				console.log(action);
				var backPath = action.payload.backPath ;
				return {...state, name:name, path:response.path.replace("disk:/","/"), folders:folders, files:files, backPath:backPath}
			break;
			case ACTION_GO_BACK:
				console.log(action);
				var response = action.payload;
				var name = response.name;
				var folders = searchFolders(response);
				var files = searchFiles(response);
				return {...state, name:name, path:response.path.replace("disk:/","/"), folders:folders, files:files}
			break	
		}
		return state;
	}

	//Хранилище
	const store = createStore(reducer);

	//Связывание компонентов с хранилищем, передача данных в пропсы компонента
const mapStateToProps = (state) =>{
	//console.log(state);
	return {
		name:state.name,
		path:state.path,
		backPath:state.backPath,
		folders:state.folders,
		files:state.files
	};
}

const WrappedAppComponent = connect(mapStateToProps)(List);
//const WrappedAppComponent = connect(mapStateToProps)(Folder);

const supportsHistory = 'pushState' in window.history
ReactDOM.render(
	
		<BrowserRouter>
			<div>
			<Provider store = {store}>
				<Route path="/" component={App} />
				<Route path="/auth" component={Auth} />
				<Route path="/list/" component= {WrappedAppComponent} />
			</Provider>	
			</div>
		</BrowserRouter  >
	,
	document.getElementById('root')
)

}












