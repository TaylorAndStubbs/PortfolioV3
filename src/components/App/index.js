import React, { Component } from 'react';
import { Flex } from 'react-flex';
import Media from 'react-media';
import 'react-flex/index.css';
import Header from '../Header';
import Projects from '../Projects';

class App extends Component {
	render() {
		return (
			<Flex style={style.appFrame}>
				<Header/>
				<Media query="(max-width: 1023px)">
					{matches => matches ? null : <Projects/>}
				</Media>
			</Flex>
		);
	}
}

const style = {
	appFrame: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		backgroundColor: "#FFFFFF"
	}
};

export default App;
