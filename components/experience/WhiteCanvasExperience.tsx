import React from 'react';
import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import Experience from './Experience';

interface IWhiteCanvasExperienceProps {}

const WhiteCanvasExperience: React.FC<IWhiteCanvasExperienceProps> = () => {
	return (
		<Experience.Card>
			<Experience.Heading>
				<Box flexGrow={1}>
					<Experience.HeadingTitle>Full Stack Developer</Experience.HeadingTitle>
					<Experience.HeadingSubtitle>White Canvas</Experience.HeadingSubtitle>
				</Box>
				<Experience.HeadingImages>
					<Experience.HeadingImage width={140} height={50} src="/logos/white-canvas.png" alt="Agile Engine logo" />
				</Experience.HeadingImages>
			</Experience.Heading>
			<Experience.Text>
				Despite being my first professional development experience, White Canvas was very challenging and rewarding. In
				this software factory I worked from beginning to end on many projects and it was a very educational experience.
			</Experience.Text>
			<Experience.Text>
				I joined as a PHP developer, and I had the chance to work with a very wide tech stack on different projects,
				meet the clients, make project estimations, collaborate with product teams, and take part in building incredible
				apps from the start.
			</Experience.Text>
			The tech stack I used during this job included the following:
			<UnorderedList>
				<ListItem>React.js</ListItem>
				<ListItem>Typescript</ListItem>
				<ListItem>Lerna</ListItem>
				<ListItem>Storybook</ListItem>
				<ListItem>Accessibility</ListItem>
				<ListItem>Jest</ListItem>
				<ListItem>Enzyme</ListItem>
				<ListItem>@testing-lib/react</ListItem>
				<ListItem>Cypress</ListItem>
				<ListItem>Docker</ListItem>
				<ListItem>Python</ListItem>
				<ListItem>Django + djangorestframework</ListItem>
			</UnorderedList>
		</Experience.Card>
	);
};

export default WhiteCanvasExperience;
