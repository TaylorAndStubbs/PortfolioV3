import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'react-flex';
import Media from 'react-media';

class Project extends Component {
	render() {
		return (
			<Flex style={style.projectFrame} row={true} alignItems="flex-start">
				{this.renderContent()}
			</Flex>
		)
	};

	renderContent() {
		if (this.props.leftAlign) {
			return [
				this.renderInfo(),
				this.renderImages()
			]
		} else {
			return [
				this.renderImages(),
				this.renderInfo()
			]
		}
	}

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
					<Media query="(max-width: 1023px)">
						{matches => matches ? (
							<p style={style.netBookTitle}>{this.props.title}</p>
						) : (
							<p style={style.title}>{this.props.title}</p>
						)}
					</Media>

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
				<a href={this.props.image1} style={style.imageContainer}>
					<img src={this.props.image1} style={style.image}/>
				</a>
				<a href={this.props.image2} style={style.imageContainer}>
					<img src={this.props.image2} style={style.image}/>
				</a>
				<a href={this.props.image3} style={style.imageContainer}>
					<img src={this.props.image3} style={style.image}/>
				</a>
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
		fontSize: 26,
		marginRight: '2%'
	},
	netBookTitle: {
		fontSize: 22,
	},
	image: {
		width: '100%'
	},
	imageContainer: {
		width: '27%'
	},
	infoFrame: {
		width: '36%',
		padding: '2%'
	},
	imageFrame: {
		width: '56%',
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
		marginLeft: '1%',
		marginRight: '1%'
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
