import React, { Component } from 'react';
import { Flex } from 'react-flex';
import Project from '../Project';

class Projects extends Component {
	render() {
		return (
			<Flex style={style.projectsFrame}
				  justifyContent="center"
				  row={false}>
				<p style={style.title}>Portfolio</p>
				<Flex column={true}>
					<Project
						leftAlign={true}
						title="rev RE"
						description="flksdjflkjdskfjldsjflksdjf"
						image1="http://i.imgur.com/fywwpcC.png"
						image2="http://i.imgur.com/rQTgBZu.png"
						image3="http://i.imgur.com/JcWyHeV.png"
						androidLink="https://play.google.com/store/apps/details?id=com.revre&hl=en"/>
					<Project
						leftAlign={false}
						title="Flamingle"
						description="flksdjflkjdskfjldsjflksdjf"
						image1="http://i.imgur.com/lRAJRVY.png"
						image2="http://i.imgur.com/S4KgjBy.png"
						image3="http://i.imgur.com/OO1tdb2.png"/>
					<Project
						leftAlign={true}
						title="NerdGolf"
						description="flksdjflkjdskfjldsjflksdjf"
						image1="http://i.imgur.com/qg7rJCQ.png"
						image2="http://i.imgur.com/bCbLJsA.png"
						image3="http://i.imgur.com/31Vs1Sa.png"
						gitHubLink="https://github.com/TaylorAndStubbs/NerdGolf"
						androidLink="https://play.google.com/store/apps/details?id=com.taylorstubbs.nerdgolf.nerdgolf&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"/>
					<Project
						leftAlign={false}
						title="taylorstubbs.com"
						description="flksdjflkjdskfjldsjflksdjf"
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
