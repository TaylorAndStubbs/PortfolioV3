import React, { Component } from 'react';
import { Flex } from 'react-flex';
import $ from 'jquery';
import Contact from '../Contact';

class Header extends Component {
	render() {
		return (
			<Flex style={style.headerFrame}
				  column={true}
				  alignItems="center">
				<img src="http://i.imgur.com/EXaXbBw.png" style={style.logo}/>
				<p style={style.title}>Taylor Stubbs</p>
				<Flex style={style.contactFrame}>
					<Contact/>
				</Flex>
				<Flex style={style.scrollButtonFrame} onClick={() => this.scrollToPortfolio()} column={true}>
					<img style={style.scrollButtonIcon} src="http://i.imgur.com/hDzFQLC.png"/>
				</Flex>
			</Flex>
		);
	}

	scrollToPortfolio = () => {
		$('html, body').animate({
			scrollTop: $("#portfolio").offset().top
		}, 1000);
	};
}

const style = {
	headerFrame: {
		height: '95%',
		width: '100%',
		paddingTop: '5%',
		border: '0 solid #7f7f7f',
		borderBottomWidth: 1
	},
	title: {
		fontSize: 60,
		letterSpacing: 4
	},
	logo: {
		height: '50%'
	},
	contactFrame: {
		marginTop: 20
	},
	scrollButtonFrame: {
		cursor: 'pointer',
		bottom: '0',
		position: 'absolute',
		marginBottom: '2%'
	},
	scrollButtonIcon: {
		width: '2%'
	}
};

export default Header;
