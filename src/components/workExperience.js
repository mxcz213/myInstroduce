import React from 'react';
import LatestJob from './latestJob.js';
import ServiceCompany from './serviceCompany.js';

export default class WorkExprience extends React.Component {
	render(){
		return (
			<div className="work-experience">
				<LatestJob></LatestJob>
				<ServiceCompany></ServiceCompany>
			</div>
		)
	}
}