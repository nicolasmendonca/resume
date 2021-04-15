import React from 'react';
import * as Chakra from '@chakra-ui/react';
import Experience from './Experience';

interface IntiveExperienceProps {}

const IntiveExperience: React.FC<IntiveExperienceProps> = () => {
	return (
		<Experience.Card>
			<Experience.Heading>
				<Chakra.Box flexGrow={1}>
					<Experience.HeadingTitle>Ssr Frontend Developer</Experience.HeadingTitle>
					<Experience.HeadingSubtitle>Intive / Intelligize</Experience.HeadingSubtitle>
				</Chakra.Box>
				<Experience.HeadingImages>
					<Experience.HeadingImage width={140} height={36} src="/logos/intive.png" alt="Intive logo" />
					<Chakra.Box>
						<Experience.HeadingImage width={140} height={36} src="/logos/intelligize.png" alt="Intelligize logo" />
					</Chakra.Box>
				</Experience.HeadingImages>
			</Experience.Heading>
			<Experience.Text>
				At{' '}
				<Chakra.Link href="https://intive.com/" color="purple.400" fontWeight="bold" isExternal>
					Intive
				</Chakra.Link>{' '}
				I've worked at{' '}
				<Chakra.Link href="https://www.intelligize.com/" color="purple.400" fontWeight="bold" isExternal>
					Intelligize
				</Chakra.Link>
				, which is a research platform that ensures law firms, accounting firms, corporations and other organizations
				stay compliant with government regulations. It required a lot of work with charts with D3, a custom filtering
				system and PDF annotations.
			</Experience.Text>
			The tech stack I used during this job included the following:
			<Chakra.UnorderedList>
				<Chakra.ListItem>React.js</Chakra.ListItem>
				<Chakra.ListItem>Redux</Chakra.ListItem>
				<Chakra.ListItem>Immutable.js</Chakra.ListItem>
				<Chakra.ListItem>Typescript</Chakra.ListItem>
				<Chakra.ListItem>Lerna</Chakra.ListItem>
				<Chakra.ListItem>Storybook</Chakra.ListItem>
				<Chakra.ListItem>Jest</Chakra.ListItem>
				<Chakra.ListItem>Enzyme</Chakra.ListItem>
			</Chakra.UnorderedList>
		</Experience.Card>
	);
};

export default IntiveExperience;
