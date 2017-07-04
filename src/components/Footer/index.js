import React, { Component } from 'react';
import { Flex } from 'react-flex';

class Footer extends Component {
	render() {
		return (
			<Flex style={style.footerFrame} justifyContent="center">
				<p style={style.footer}>
					© 2017 Taylor William Stubbs. All rights reserved. Hey, you know, while I got you here let’s do some shout outs. Paul, if you’re reading this, hey man! Jon, I know you’re not gonna read this, but bruh look, you’re on a website! Max, you’re the man, nothing else needs to be said. Ok, well, I can’t think of anybody else I explicitly wanna shout out so… I dunno just be good to each other.
				</p>
			</Flex>
		);
	}
}

const style = {
	footerFrame: {
		width: '100%',
	},
	footer: {
		fontSize: 8,
		color: "#9b9b9b"
	}
};

export default Footer;
