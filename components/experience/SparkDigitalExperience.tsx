import React from 'react';
import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import Experience from './Experience';

interface SparkDigitalExperienceProps {}

const SparkDigitalExperience: React.FC<SparkDigitalExperienceProps> = () => {
	return (
		<Experience.Card>
			<Experience.Heading>
				<Box>
					<Experience.HeadingTitle>Senior Software Engineer</Experience.HeadingTitle>
					<Experience.HeadingSubtitle>Spark Digital / Macmillan</Experience.HeadingSubtitle>
				</Box>
				<Experience.HeadingImages>
					<Experience.HeadingImage width={92} height={36} src="/logos/spark.png" alt="Spark Digital logo" />
					<Experience.HeadingImage width={118} height={36} src="/logos/macmillan.png" alt="Macmillan Learning logo" />
				</Experience.HeadingImages>
			</Experience.Heading>
			<Experience.Text>
				At Spark Digital I've worked as a contractor for Macmillan Education on a product called{' '}
				<Experience.Link href="https://www.macmillanlearning.com/college/us/digital/sapling" isExternal>
					Sapling Learning
				</Experience.Link>
				.<br />
				It consisted on a platform where educators can create assessments for educational books, institutions, courses
				and training material. I've worked with the product team and other 3 contractors in the UI of the platform.
			</Experience.Text>
			<Experience.Text>
				One of the most challenging tasks I faced was to maintain a legacy codebase built with a publisher/subscriber
				library, which no one in the team was familiar with. Eventually we progressively migrated some features from
				that codebase to redux.
			</Experience.Text>
			The tech stack I used during this job included the following:
			<UnorderedList>
				<ListItem>React.js</ListItem>
				<ListItem>Typescript</ListItem>
				<ListItem>Jest</ListItem>
				<ListItem>Enzyme</ListItem>
				<ListItem>Docker</ListItem>
				<ListItem>Python for build scripts</ListItem>
				<ListItem>SQL for stored procedures and migrations</ListItem>
			</UnorderedList>
		</Experience.Card>
	);
};

export default SparkDigitalExperience;
