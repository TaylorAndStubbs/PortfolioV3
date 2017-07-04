import React, { Component } from 'react';
import { Flex } from 'react-flex';

class Header extends Component {
	render() {
		return (
			<Flex style={style.headerFrame}
				  column={true}
				  alignItems="center">
				<img src="http://i.imgur.com/EXaXbBw.png" style={style.logo}/>
				<p style={style.title}>Taylor Stubbs</p>
				<p style={style.description}>Like a baboon strapped to a rocket</p>
			</Flex>
		);
	}
}

const style = {
	headerFrame: {
		height: '95%',
		width: '100%',
		paddingTop: '5%'
	},
	title: {
		fontSize: 60,
		letterSpacing: 4
	},
	logo: {
		height: '50%'
	},
	description: {
		fontSize: 18,
		marginTop: 20
	}
};

export default Header;
