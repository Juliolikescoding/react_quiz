import React, { Component } from 'react';
import './Grades.css';
import Table from '../components/Table';

class Grades extends Component {
	render() {
		return (
			<div>
				<h1>GitHub Files</h1>
				<p>here is your project files</p>
				<Table/>
			</div>
		);
	}
}

export default Grades;