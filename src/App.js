import { Component } from "react";
import Title from './Title'
import Content from './Content'

export default class App extends Component {
	render() {
		return (
			<div>
				<Title text="안녕하세요 새로운 프로젝트 입니다." />
				<Content />
			</div>
		);
	}
}