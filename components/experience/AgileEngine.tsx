import React from 'react';
import * as Chakra from '@chakra-ui/react';
import Experience from './Experience';

interface IAgileEngineExperienceProps {}

const AgileEngineExperience: React.FC<IAgileEngineExperienceProps> = () => {
	return (
		<Experience.Card>
			<Experience.Heading>
				<Chakra.Box flexGrow={1}>
					<Experience.HeadingTitle>Lead Software Engineer</Experience.HeadingTitle>
					<Experience.HeadingSubtitle>Agile Engine / Indeed</Experience.HeadingSubtitle>
				</Chakra.Box>
				<Experience.HeadingImages>
					<Experience.HeadingImage width={36} height={36} src="/logos/agile-engine.png" alt="Agile Engine logo" />
					<Experience.HeadingImage width={140} height={36} src="/logos/indeed.png" alt="Indeed logo" />
				</Experience.HeadingImages>
			</Experience.Heading>
			<Experience.Text>
				I've been working as a contractor full time dedicated to{' '}
				<Chakra.Link href="https://www.indeed.com" color="purple.400" fontWeight="bold" isExternal>
					Indeed.com
				</Chakra.Link>{' '}
				for a year, which is the #1 job search platform in the world. I started out as a senior frontend developer, and
				I started to take ownership of the project and guide other devs. <br />
				After a year of hard work, I've been promoted to a <Chakra.Text as="b">Tech Lead</Chakra.Text> role and{' '}
				<Chakra.Text as="b">ended up leading 4 development teams, composed by 16 developers.</Chakra.Text>
			</Experience.Text>
			<Experience.Text>
				My work consisted in helping{' '}
				<Experience.Link href="https://www.indeed.com" isExternal>
					Indeed.com
				</Experience.Link>{' '}
				achieve accessibility compliance in over 30 products, coordinate work with stakeholders, train my team, and lead
				them to success.
			</Experience.Text>
			<Experience.Text>
				This task required a lot of communication skills, coordination, planning, and tracking the team's work. On the
				technical side, I've worked with many monorepos, libraries, apps and plugins with both new and old codebases;
				and I contributed to different teams following their respective workflows and guidelines.
			</Experience.Text>
			The tech stack I used during this job included the following:
			<Chakra.UnorderedList>
				<Chakra.ListItem>React.js</Chakra.ListItem>
				<Chakra.ListItem>Typescript</Chakra.ListItem>
				<Chakra.ListItem>Lerna</Chakra.ListItem>
				<Chakra.ListItem>Storybook</Chakra.ListItem>
				<Chakra.ListItem>Accessibility</Chakra.ListItem>
				<Chakra.ListItem>Jest</Chakra.ListItem>
				<Chakra.ListItem>Enzyme</Chakra.ListItem>
				<Chakra.ListItem>@testing-lib/react</Chakra.ListItem>
				<Chakra.ListItem>Cypress</Chakra.ListItem>
				<Chakra.ListItem>Docker</Chakra.ListItem>
				<Chakra.ListItem>Python</Chakra.ListItem>
				<Chakra.ListItem>Django + djangorestframework</Chakra.ListItem>
			</Chakra.UnorderedList>
		</Experience.Card>
	);
};

export default AgileEngineExperience;
