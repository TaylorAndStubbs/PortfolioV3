import React, { Component } from 'react';
import { Flex } from 'react-flex';
import Project from '../Project';

class Projects extends Component {
	render() {
		return (
			<Flex style={style.projectsFrame}
				  id="portfolio"
				  justifyContent="center"
				  row={false}>
				<p style={style.title}>Portfolio</p>
				<Flex column={true}>
					<Project
						leftAlign={true}
						title="rev RE"
						description="An extension of the Covert Clue framework, rev RE is a scavenger hunt across the Texas Tech campus. This was my first project using React Native and, despite the many quirks of the framework, was a blast to use. Special shout out to Airbnb for creating the map component since Facebook apparently wasn’t up to the task."
						image1="http://i.imgur.com/fywwpcC.png"
						image2="http://i.imgur.com/rQTgBZu.png"
						image3="http://i.imgur.com/JcWyHeV.png"
						androidLink="https://play.google.com/store/apps/details?id=com.revre&hl=en"/>
					<Project
						leftAlign={false}
						title="Flamingle"
						description="A location based dating app that periodically matches you with people at the venue you’re at. Even though the listing was removed and the server is no longer up, this app lives on in the heart of every true romantic. Maybe someday I’ll get a chance to build a suspiciously similar app with a legal distinct name and help love blossom again."
						image1="http://i.imgur.com/lRAJRVY.png"
						image2="http://i.imgur.com/S4KgjBy.png"
						image3="http://i.imgur.com/OO1tdb2.png"/>
					<Project
						leftAlign={true}
						title="NerdGolf"
						description="Do you like disc golf? Do you like keeping score? Well buddy, I got news for you. Now you can keep track of your score on the disc golf course with this handy dandy app! What makes it different than the others? Well it’s probably simpler, also I made it so you know it’s got nothing by love flowing through its veins. But maybe you think it sucks? Well, it’s open source, so get to work!"
						image1="http://i.imgur.com/qg7rJCQ.png"
						image2="http://i.imgur.com/bCbLJsA.png"
						image3="http://i.imgur.com/31Vs1Sa.png"
						gitHubLink="https://github.com/TaylorAndStubbs/NerdGolf"
						androidLink="https://play.google.com/store/apps/details?id=com.taylorstubbs.nerdgolf.nerdgolf&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"/>
					<Project
						leftAlign={false}
						title="taylorstubbs.com"
						description="It’s the website you’re currently on! Wow! The mandrill baboon strapped to a rocket was created by Olivia Giles who is stupidly talented and graciously gave me the image for free. If you like this site it’s open source so feel free to copy it and use it yourself."
						image1="http://i.imgur.com/EXaXbBw.png"
						image2="http://i.imgur.com/hpfIBNm.png?1"
						image3="http://i.imgur.com/EXaXbBw.png"
						gitHubLink="https://github.com/TaylorAndStubbs/PortfolioV3"
						webLink="http://www.taylorstubbs.com/"/>
				</Flex>
			</Flex>
		);
	}
}

const style = {
	projectsFrame: {
		width: '100%',
		backgroundColor: '#f2f2f2'
	},
	title: {
		marginTop: '2%',
		fontSize: 44,
		letterSpacing: 4
	}
};

export default Projects;
