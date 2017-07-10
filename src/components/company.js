import React from 'react';

export default class Company extends React.Component {
	constructor(){
		super();
	}

	render(){
		const infornation = this.props.title;
		return (
			<div className="company">
				<div className="mb10">
					<span className="mr50">公司：{infornation.name}</span>
					<span className="mr50">职位：{infornation.job}</span>
					<span className="mr10">部门：{infornation.department}</span>
					<span className="mr50">在职时间：{infornation.startTime}-{infornation.endTime}</span>
				</div>
				<div className="mb10">
					<p className="">工作内容：{infornation.description}</p>
				</div>
				<div className="mb10">
					<p className="">项目所用知识点：{infornation.point}</p>
				</div>
			</div>
		)
	}
}