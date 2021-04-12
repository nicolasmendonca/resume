import React from 'react';
import { Box, Heading, Container, useColorModeValue } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import PageHeading from 'components/PageHeading';
import AgileEngineExperience from 'experience/AgileEngine';
import SparkDigitalExperience from 'experience/SparkDigitalExperience';
import IntiveExperience from 'experience/IntiveExperience';
import WhiteCanvasExperience from 'experience/WhiteCanvasExperience';

const ThemeSwitcher = dynamic(() => import(/* webpackMode: "lazy" */ 'components/ThemeSwitcher'));
const Particles = dynamic(() => import(/* webpackMode: "lazy",  */ 'components/Particles'));

interface IIndexPageProps {}

const IndexPage: React.FC<IIndexPageProps> = () => {
	const bodyBg = useColorModeValue('gray.100', 'gray.700');

	return (
		<Box minHeight="100vh" backgroundColor={bodyBg}>
			<Head>
				<title>Nicolas Mendonca</title>
				<meta name="description" content="My personal resume. Learn about my career and what I do." />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Box>
				<Particles />
				<ThemeSwitcher />
			</Box>
			<PageHeading />
			<Box my="0" py="12">
				<Container maxW="container.md">
					<Heading as="h2">Experience</Heading>
					<AgileEngineExperience />
					<SparkDigitalExperience />
					<IntiveExperience />
					<WhiteCanvasExperience />
				</Container>
			</Box>
		</Box>
	);
};

export default IndexPage;
