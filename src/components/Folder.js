import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../bootstrap/css/bootstrap.css';
import '../css/normalize.css';
import '../css/fontawesome/css/all.css';
import '../css/app.css';
import PreLoader, {yaapi} from './Api';
import {changeFolderAction} from '../actions.js';

class Folder extends Component {
	constructor(props){
		super(props);
		this.state = {
			data:null,	
		}
	}
	
	changeFolder(){
			yaapi( 'GET', null, { path:this.props.item.path }, 'https://cloud-api.yandex.net/v1/disk/resources', 
				(data) => {
					var oldPath = ''+this.props.path;
					this.props.dispatch(changeFolderAction({...data, backPath:oldPath}));
				}, (err) => {
					console.log('err:', err);
				}
			);
	}

	render() {
		const ACTION_CHANGE_FOLDER = 'ACTION_CHANGE_FOLDER';
		
		return (
			<NavLink to =  {'/list/' + this.props.item.path.replace("disk:/","")+ '/'} onClick={()=>{
				this.changeFolder();
			}} >
			<div class="folder">
			<div class="folder-icon">
				<i class="fas fa-folder"></i>
			</div>
			<div class="folder-name">{this.props.item.name}</div>
			</div>
			</NavLink>

		);
	}
}

export default Folder;
