import React from 'react';
import * as Chakra from '@chakra-ui/react';
import Experience from './Experience';

interface SparkDigitalExperienceProps {}

const SparkDigitalExperience: React.FC<SparkDigitalExperienceProps> = () => {
	return (
		<Experience.Card>
			<Experience.Heading>
				<Chakra.Box>
					<Experience.HeadingTitle>Senior Software Engineer</Experience.HeadingTitle>
					<Experience.HeadingSubtitle>Spark Digital / Macmillan</Experience.HeadingSubtitle>
				</Chakra.Box>
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
				library and migrate it to redux.
			</Experience.Text>
			The tech stack I used during this job included the following:
			<Chakra.UnorderedList>
				<Chakra.ListItem>React.js</Chakra.ListItem>
				<Chakra.ListItem>Typescript</Chakra.ListItem>
				<Chakra.ListItem>Jest</Chakra.ListItem>
				<Chakra.ListItem>Enzyme</Chakra.ListItem>
				<Chakra.ListItem>Docker</Chakra.ListItem>
				<Chakra.ListItem>Python for build scripts</Chakra.ListItem>
				<Chakra.ListItem>SQL for stored procedures and migrations</Chakra.ListItem>
			</Chakra.UnorderedList>
		</Experience.Card>
	);
};

export default SparkDigitalExperience;
