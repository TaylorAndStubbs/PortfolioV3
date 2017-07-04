import React, { Component } from 'react';
import { Flex } from 'react-flex';
import Contact from '../Contact';

class Projects extends Component {
	render() {
		return (
			<Flex style={style.projectsFrame} alignItems="flex-start" justifyContent="center">
				<p style={style.title}>Portfolio</p>
			</Flex>
		);
	}
}

const style = {
	projectsFrame: {
		height: '100%',
		width: '100%',
	},
	title: {
		marginTop: '2%',
		fontSize: 44,
		letterSpacing: 4
	}
};

export default Projects;
