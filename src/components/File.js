import React, { Component } from 'react';
import '../bootstrap/css/bootstrap.css';
import '../css/normalize.css';
import '../css/fontawesome/css/all.css';
import '../css/app.css';
class File extends Component {	
	render() {		
		return (

			<div class="file">
			<div class="file-icon">
				<i class="fas fa-file"></i>
			</div>
			<div class="file-name">{this.props.item.name}</div>
			</div>


		);
	}
}
export default File; 
