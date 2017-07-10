import React from 'react';

export default class MySkills extends React.Component {
	render(){
		return (
			<div className="mySkill shadow-layout">
				<h4 className="title">我的技能</h4>
				<div className="mySkill-list mt10">
					<p>	1、熟悉html,css,javascript,能够处理浏览器的兼容问题。</p>
					<p>	2、对前端mvc架构有一定的理解，目前使用的公司原生js封装的mvc库，可以自由扩展。</p>
					<p>3、熟悉前端一些ui框架如bootstrap,antd，熟悉reactjs结合antdUI组件，使用es6语法，采用webpack打包的项目，具备调试js代码的能力。</p>
					<p>4、近两年项目都是写原生js代码，进行原生js的封装和业务逻辑的处理。</p>
					<p>5、熟悉html5的新规范和css3，用这些新特性做过移动端网页。</p>
					<p>6、了解nodejs,写过一些小demo，了解php,java等后端语言，可以跟后端开发进行良好的接口对接和联调。</p>
					<p>7、工作认真，不懂的会很快去学习并投入到项目中。</p>
					<p>8、热爱前端，关注新技术，希望新项目可以用到这些前沿技术框架。</p>
					<p>9、抗压能力强，有分析问题与解决问题的能力，团队精神，协调和沟通能力。</p>
					<p></p>
				</div>
			</div>
		)
	}
}