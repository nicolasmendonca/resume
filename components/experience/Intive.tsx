import React from 'react';
import { Box, Text, Link, ListItem, UnorderedList } from '@chakra-ui/react';
import Experience from './Experience';

interface IntiveProps {}

const Intive: React.FC<IntiveProps> = () => {
	return (
		<Experience.Card>
			<Experience.Heading>
				<Box flexGrow={1}>
					<Experience.HeadingTitle>Ssr Frontend Developer</Experience.HeadingTitle>
					<Experience.HeadingSubtitle>Intive / Intelligize</Experience.HeadingSubtitle>
				</Box>
				<Experience.HeadingImages>
					<Experience.HeadingImage width={140} height={36} src="/logos/intive.png" alt="Intive logo" />
					<Box>
						<Experience.HeadingImage width={140} height={36} src="/logos/intelligize.png" alt="Intelligize logo" />
					</Box>
				</Experience.HeadingImages>
			</Experience.Heading>
			<Experience.Text>
				At{' '}
				<Link href="https://intive.com/" color="purple.400" fontWeight="bold" isExternal>
					Intive
				</Link>{' '}
				I've worked at{' '}
				<Link href="https://www.intelligize.com/" color="purple.400" fontWeight="bold" isExternal>
					Intelligize
				</Link>
				, which is a research platform that ensures law firms, accounting firms, corporations and other organizations
				stay compliant with government regulations. It required a lot of work with charts with D3, a custom filtering
				system and PDF annotations.
			</Experience.Text>
			<Experience.Text></Experience.Text>
			The tech stack I used during this job included the following:
			<UnorderedList>
				<ListItem>React.js</ListItem>
				<ListItem>Typescript</ListItem>
				<ListItem>Lerna</ListItem>
				<ListItem>Storybook</ListItem>
				<ListItem>Jest</ListItem>
				<ListItem>Enzyme</ListItem>
			</UnorderedList>
		</Experience.Card>
	);
};

export default Intive;
