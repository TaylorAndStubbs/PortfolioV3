import React, { Component } from 'react';
import { Flex } from 'react-flex';

class Contact extends Component {
	render() {
		return (
			<Flex alignItems="center"
				  justifyContent="center">
				<a style={style.link} href="mailto:taylor@taylorstubbs.com">Email</a>
				<a style={{...style.link, ...style.centerLink}} href="https://github.com/TaylorAndStubbs">Github</a>
				<a style={style.link} href="./assets/resume.pdf" target="_blank">Resume</a>
			</Flex>
		);
	}
}

const style = {
	link: {
		fontWeight: 'bold',
		color: '#4286f4',
		textDecoration: 'none',
	},
	centerLink: {
		border: '0 solid #7f7f7f',
		borderLeftWidth: 2,
		borderRightWidth: 2,
		marginLeft: 10,
		marginRight: 10,
		paddingLeft: 10,
		paddingRight: 10
	}
};

export default Contact;
