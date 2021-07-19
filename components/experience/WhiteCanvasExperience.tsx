import React from 'react';
import * as Chakra from '@chakra-ui/react';
import Experience from './Experience';

interface IWhiteCanvasExperienceProps {}

const WhiteCanvasExperience: React.FC<IWhiteCanvasExperienceProps> = () => {
	const whiteCanvasLogo = Chakra.useColorModeValue('/logos/white-canvas-light.png', '/logos/white-canvas-dark.png');
	return (
		<Experience.Card>
			<Experience.Heading>
				<Chakra.Box flexGrow={1}>
					<Experience.HeadingTitle>Full Stack Developer</Experience.HeadingTitle>
					<Experience.HeadingSubtitle>White Canvas</Experience.HeadingSubtitle>
				</Chakra.Box>
				<Experience.HeadingImages>
					<Experience.HeadingImage width={140} height={50} src={whiteCanvasLogo} alt="Agile Engine logo" />
				</Experience.HeadingImages>
			</Experience.Heading>
			<Experience.Text>
				At White Canvas I had my first professional development job experience, and it was very challenging and
				rewarding. In this software factory I worked from beginning to end on many projects and it was a very
				educational experience.
			</Experience.Text>
			<Experience.Text>
				I joined as a PHP developer, and I had the chance to work with a very wide tech stack on different projects,
				meet the clients, make project estimations, collaborate with product teams, and take part in building incredible
				apps from the start.
			</Experience.Text>
			The tech stack I used during this job included the following:
			<Chakra.UnorderedList>
				<Chakra.ListItem>Angular 2+</Chakra.ListItem>
				<Chakra.ListItem>React.js</Chakra.ListItem>
				<Chakra.ListItem>Typescript</Chakra.ListItem>
				<Chakra.ListItem>Storybook</Chakra.ListItem>
				<Chakra.ListItem>Laravel</Chakra.ListItem>
				<Chakra.ListItem>Docker</Chakra.ListItem>
			</Chakra.UnorderedList>
		</Experience.Card>
	);
};

export default WhiteCanvasExperience;
