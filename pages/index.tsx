import React from 'react';
import * as Chakra from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import PageHeading from 'components/PageHeading';
import AgileEngineExperience from 'experience/AgileEngine';
import SparkDigitalExperience from 'experience/SparkDigitalExperience';
import IntiveExperience from 'experience/IntiveExperience';
import WhiteCanvasExperience from 'experience/WhiteCanvasExperience';
import Education from '../components/Education';

const ThemeSwitcher = dynamic(() => import(/* webpackMode: "lazy" */ 'components/ThemeSwitcher'));
const Particles = dynamic(() => import(/* webpackMode: "lazy",  */ 'components/Particles'));

interface IIndexPageProps {}

const IndexPage: React.FC<IIndexPageProps> = () => {
	const bodyBg = Chakra.useColorModeValue('gray.100', 'gray.700');

	return (
		<Chakra.Box minHeight="100vh" backgroundColor={bodyBg} position="relative">
			<Head>
				<title>Nicolas Mendonca</title>
				<meta name="description" content="My personal resume. Learn about my career and what I do." />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Chakra.Box>
				<Particles />
				<ThemeSwitcher />
			</Chakra.Box>
			<Chakra.Box
				position={['relative', 'relative', 'absolute']}
				left="0"
				right="0"
				transform={['none', 'none', 'translateY(-75%)']}
				zIndex="1"
			>
				<Chakra.Box width={['100%', '100%', 'container.lg', 'container.lg']} margin="0 auto">
					<PageHeading />
				</Chakra.Box>
			</Chakra.Box>
			<Chakra.Box my="0" pt={[12, 12, 32]} pb={12}>
				<Chakra.Container maxW="container.md">
					<Chakra.Heading as="h2">Experience</Chakra.Heading>
					<AgileEngineExperience />
					<SparkDigitalExperience />
					<IntiveExperience />
					<WhiteCanvasExperience />
				</Chakra.Container>
			</Chakra.Box>
			<Chakra.Box my="0" pt={6} pb={12}>
				<Education />
			</Chakra.Box>
		</Chakra.Box>
	);
};

export default IndexPage;
