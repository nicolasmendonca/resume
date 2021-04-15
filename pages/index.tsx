import React from 'react';
import { Box, Heading, Container, useColorModeValue, Divider, Flex } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import PageHeading from 'components/PageHeading';
import AgileEngineExperience from 'experience/AgileEngine';
import SparkDigitalExperience from 'experience/SparkDigitalExperience';
import IntiveExperience from 'experience/IntiveExperience';
import WhiteCanvasExperience from 'experience/WhiteCanvasExperience';
import Experience from '../components/experience/Experience';

const ThemeSwitcher = dynamic(() => import(/* webpackMode: "lazy" */ 'components/ThemeSwitcher'));
const Particles = dynamic(() => import(/* webpackMode: "lazy",  */ 'components/Particles'));

interface IIndexPageProps {}

const IndexPage: React.FC<IIndexPageProps> = () => {
	const bodyBg = useColorModeValue('gray.100', 'gray.700');
	const unsamLogo = useColorModeValue('/logos/unsam-light.png', '/logos/unsam-dark.png');
	const ubaLogo = useColorModeValue('/logos/uba-light.png', '/logos/uba-dark.png');
	const daVinciLogo = useColorModeValue('/logos/da-vinci-light.png', '/logos/da-vinci-dark.png');

	return (
		<Box minHeight="100vh" backgroundColor={bodyBg} position="relative">
			<Head>
				<title>Nicolas Mendonca</title>
				<meta name="description" content="My personal resume. Learn about my career and what I do." />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Box>
				<Particles />
				<ThemeSwitcher />
			</Box>
			<Box
				position={['relative', 'relative', 'absolute']}
				left="0"
				right="0"
				transform={['none', 'none', 'translateY(-75%)']}
				zIndex="1"
			>
				<Box width={['100%', '100%', 'container.lg', 'container.lg']} margin="0 auto">
					<PageHeading />
				</Box>
			</Box>
			<Box my="0" pt={[12, 12, 32]} pb={12}>
				<Container maxW="container.md">
					<Heading as="h2">Experience</Heading>
					<AgileEngineExperience />
					<SparkDigitalExperience />
					<IntiveExperience />
					<WhiteCanvasExperience />
				</Container>
			</Box>
			<Box my="0" pt={6} pb={12}>
				<Container maxW="container.md">
					<Heading as="h2">Education</Heading>
					<Experience.Card>
						<Flex
							flexDirection={['column', 'column', 'row']}
							alignItems={'center'}
							justifyContent={['center', 'center', 'space-between']}
						>
							<Box flexGrow={1}>
								<Experience.HeadingTitle fontSize="lg">Software Analyst</Experience.HeadingTitle>
								<Experience.HeadingSubtitle fontSize="lg">Da Vinci Institute</Experience.HeadingSubtitle>
							</Box>
							<Box my={2}>
								<Experience.HeadingImage width={140} height={50} src={daVinciLogo} alt="Da Vinci Institute logo" />
							</Box>
						</Flex>
						<Divider my={6} />
						<Flex
							flexDirection={['column', 'column', 'row']}
							alignItems={'center'}
							justifyContent={['center', 'center', 'space-between']}
						>
							<Box flexGrow={1}>
								<Experience.HeadingTitle fontSize="lg">Electronics Engineering</Experience.HeadingTitle>
								<Experience.HeadingSubtitle fontSize="lg">
									Universidad Nacional de San Martin
								</Experience.HeadingSubtitle>
							</Box>
							<Box my={2}>
								<Experience.HeadingImage width={140} height={50} src={unsamLogo} alt="UNSAM logo" />
							</Box>
						</Flex>
						<Divider my={6} />
						<Flex
							flexDirection={['column', 'column', 'row']}
							alignItems={'center'}
							justifyContent={['center', 'center', 'space-between']}
						>
							<Box flexGrow={1}>
								<Experience.HeadingTitle fontSize="lg">High School Comercial Bachelor</Experience.HeadingTitle>
								<Experience.HeadingSubtitle fontSize="lg">
									Escuela de Comercio Carlos Pellegrini
								</Experience.HeadingSubtitle>
							</Box>
							<Box mr={[0, 0, 6]} my={2}>
								<Experience.HeadingImage width={80} height={80} src={ubaLogo} alt="UBA logo" />
							</Box>
						</Flex>
					</Experience.Card>
				</Container>
			</Box>
		</Box>
	);
};

export default IndexPage;
