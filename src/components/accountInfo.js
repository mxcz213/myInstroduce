import React from 'react';
import github from '../images/github.png';
import jianshu from '../images/jianshu.png';

export default class AccountInfo extends React.Component {
	constructor(){
		super();
		this.state = {
			myOlds:26,
			jobtimes:4
		}
	}

	getYear(){
		const now = new Date(),
			  myBornYear = 1991,
			  firstJobTime = 2013,
			  year = now.getFullYear();
		const myOlds = parseInt((year - myBornYear),10);
		const jobtimes = parseInt((year - firstJobTime),10);
		this.setState({
			myOlds:myOlds,
			jobtimes:jobtimes
		})
	}

	componentDidMount(){
		this.getYear();
	}

	render(){

		return (
			<div className="mb10 shadow-layout">
				<h3 className="name">姓名：何陈娟</h3>
				<h3 className="name">职位：前端开发工程师</h3>
				<div className="base-info-list">
					<span className="inline-block mr20">性别：女</span>
					<span className="inline-block mr20">年龄：{this.state.myOlds}岁</span>
					<span className="inline-block">未婚</span>
				</div>
				<div className="base-info-list">
					<span className="inline-block mr20"><i></i>现居上海</span>
					<span className="inline-block">{this.state.jobtimes}年工作经验</span>
				</div>
				<div className="base-info-list">
					<span className="inline-block"><i></i>13564329531</span>
				</div>
				<div className="base-info-list">
					<span className="inline-block"><i></i>496182124@qq.com</span>
				</div>
				<div className="base-info-list">					
					<a className="inline-block mr20" href="https://github.com/mxcz213" rel="noopener noreferrer">
						<img width="30" height="30" src={github} className="icon-logo" alt="github" />
					</a>
					<a className="inline-block" href="http://www.jianshu.com/u/b230cceb9ab1" rel="noopener noreferrer">
						<img width="30" height="30" src={jianshu} className="icon-logo" alt="简书" />
					</a>
				</div>
			</div>
		)
	}
}