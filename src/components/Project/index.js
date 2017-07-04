import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'react-flex';

class Project extends Component {
	render() {
		if (this.props.leftAlign) {
			return (
				<Flex style={style.projectFrame} row={true} alignItems="flex-start">
					{this.renderInfo()}
					{this.renderImages()}
				</Flex>
			);
		} else {
			return (
				<Flex style={style.projectFrame} row={true} alignItems="flex-start">
					{this.renderImages()}
					{this.renderInfo()}
				</Flex>
			);
		}
	};

	renderGitHubLink = () => {
		if (this.props.gitHubLink === undefined) {
			return null;
		}

		return (
			<a href={this.props.gitHubLink} style={style.iconFrame}>
				<img src="http://i.imgur.com/PKdALj5.png" style={style.gitHubLink}/>
			</a>
		);
	};

	renderAndroidLink = () => {
		if (this.props.androidLink === undefined) {
			return null;
		}

		return (
			<a href={this.props.androidLink} style={style.iconFrame}>
				<img src="http://i.imgur.com/IqXt1v3.png" style={style.androidLink}/>
			</a>
		);
	};

	renderWedLink = () => {
		if (this.props.webLink === undefined) {
			return null;
		}

		return (
			<a href={this.props.webLink} style={style.iconFrame}>
				<img src="http://i.imgur.com/k6Yn4qn.png" style={style.webLink}/>
			</a>
		);
	};

	renderInfo = () => {
		return (
			<Flex style={style.infoFrame}>
				<Flex row={true} alignItems="center" style={style.titleFrame}>
					<p style={style.title}>{this.props.title}</p>
					{this.renderGitHubLink()}
					{this.renderAndroidLink()}
					{this.renderWedLink()}
				</Flex>
				<p style={style.description}>{this.props.description}</p>
			</Flex>
		);
	};

	renderImages = () => {
		return (
			<Flex style={style.imageFrame} justifyContent="space-between">
				<img src={this.props.image1} style={style.image}/>
				<img src={this.props.image2} style={style.image}/>
				<img src={this.props.image3} style={style.image}/>
			</Flex>
		);
	};
}

const style = {
	projectFrame: {
		width: '100%',
		paddingTop: '6%',
		paddingBottom: '6%'
	},
	title: {
		fontSize: 32,
		marginRight: '4%'
	},
	image: {
		width: '27%'
	},
	infoFrame: {
		width: '31%',
		padding: '2%'
	},
	imageFrame: {
		width: '61%',
		padding: '2%'
	},
	description: {
		lineHeight: '150%',
		fontSize: 18
	},
	gitHubLink: {
		width: 38,
	},
	androidLink: {
		width: 26,
	},
	webLink: {
		width: 34,
	},
	titleFrame: {
		width: '100%',
		marginBottom: '5%'
	},
	iconFrame: {
		marginLeft: '2%',
		marginRight: '2%'
	}
};

Project.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	leftAlign: PropTypes.bool.isRequired,
	androidLink: PropTypes.string,
	gitHubLink: PropTypes.string,
	webLink: PropTypes.string,
	image1: PropTypes.string,
	image2: PropTypes.string,
	image3: PropTypes.string
};

export default Project;
