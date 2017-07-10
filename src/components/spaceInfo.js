import React from 'react';
import BaseInfo from './baseInfo';
import WorkExprience from './workExperience';
import ProjectExprience from './projectExperience';

export default class SpaceInfo extends React.Component {
	constructor(){
		super();
		this.state = {
			minHeight:''
		}
	}

	componentDidMount(){
		/*const header = this.refs.header;
		const clientHeight = document.documentElement.clientHeight; 
		const wraperHeight = clientHeight - header.offsetHeight + 'px';
		this.setState({
			minHeight:wraperHeight
		});*/
	}

	render(){

		return (
			<div className="base-wrapper">
				<WorkExprience></WorkExprience>
				<BaseInfo></BaseInfo>
				<ProjectExprience></ProjectExprience>
			</div>
		)
	}
}