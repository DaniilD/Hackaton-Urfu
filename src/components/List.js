import React, { Component } from 'react';
import PreLoader, {yaapi} from './Api';
import '../bootstrap/css/bootstrap.css';
import '../css/normalize.css';
import '../css/fontawesome/css/all.css';
import '../css/app.css';
import TeamHeader from './TeamHeader'; 
import {NavLink} from 'react-router-dom';
import Folder from './Folder'; 
import File from './File'; 
import {connect, Provider} from 'react-redux';
import {goBackAction} from '../actions.js';
import {generateBackUrl} from '../functions.js';

class List extends Component {
	
	constructor(props){
		super(props);

		this.goBack = this.goBack.bind(this);

	}	

		

	goBack() {

		console.log('path : ' +this.props.path);
		console.log('name : ' +this.props.name);
		var lenght = this.props.path.length - this.props.name.length;
		var backPath = this.props.path.slice(0, lenght);
		console.log(lenght);
		console.log(backPath);
		yaapi( 'GET', null, { path:backPath}, 'https://cloud-api.yandex.net/v1/disk/resources', 
		(data) => {

			this.props.dispatch(goBackAction(data));
		}, (err) => {
			console.log('err:', err);
		}
	);

	}
	
	render() {
		console.log("Path " + this.props.path);

		const mapStateToProps = (state) =>{
			//console.log(state);
			return {
				path:state.path,
				backPath:state.backPath,
				folders:state.folders,
				files:state.files
			};
		}
		
		const WrappedFolderComponent = connect(mapStateToProps)(Folder);
		//console.log(this.props.backPath);
		return (
			
			<div >
				<TeamHeader />
				<div>
					
				
					<div class="content">
						<div class="container">	
							<div class="title">
							<NavLink to ={'/list' + this.props.path.slice(0, this.props.path.length - this.props.name.length)}>
							{(this.props.path !== '/')?	
                			<div class="arrow-back" onClick = {this.goBack}>
                    			<i class="fas fa-arrow-left"></i>
							</div>	:null}
							</NavLink>
                			<h3>{'Файлы'+this.props.path}</h3>
            				</div>
								
							<div class="row">
							{this.props.folders.map((item)=>{
							return (<div class="col-xl-2 col-lg-4 col-md-6 col-sm-12 text-center">	
							{
								<WrappedFolderComponent
									oldPath={this.props.backPath} 
									path = {item.path}
									item = {item}
									delFolder = {this.delFolder}
									getList = {this.getList}	/>
								
							} 
							</div>)
						})}
						{this.props.files.map((item)=>{
							return (<div class="col-xl-2 col-lg-4 col-md-6 col-sm-12 text-center">	
							{
								<File 
									path = {item.path}
									item = {item}
									delFolder = {this.delFolder}
									getList = {this.getList}	/>
								
							} 
							</div>)
						})}
							</div>
						</div>
					</div>




		  
			</div> 
	</div>)
	
	}
}

export default List;
