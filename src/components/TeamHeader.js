import React, { Component } from 'react';
import '../bootstrap/css/bootstrap.css';
import '../css/normalize.css';
import '../css/fontawesome/css/all.css';
import '../css/app.css';

class TeamHeader extends Component {
	
	render() {

		return (
			<header class="header"> 
			<div class="container-fluid">
				<div class="row">
					<div class="col-xl-12">
						<div class="logo">
							<span class="funf"><span class="F">F</span>unfiriki</span><span class="drive">.Диск</span>
								
						</div>
					</div>
				</div>
				<div class="container">
					<div class="space">

					</div>
				</div>    
			</div>
			<div class="line">
				<div class="container">
					<div class="row">
					<div class="col-xl-12">	
					<div class="text-center">
					/* We love to write code. */
					</div>
					
					</div>	
						</div>
				</div>
			</div>
		</header>
		);
	}
}

export default TeamHeader;
