import * as Chakra from '@chakra-ui/react';
import React from 'react';
import Experience from './experience/Experience';

interface EducationProps {}

const Education: React.FC<EducationProps> = () => {
	const unsamLogo = Chakra.useColorModeValue('/logos/unsam-light.png', '/logos/unsam-dark.png');
	const ubaLogo = Chakra.useColorModeValue('/logos/uba-light.png', '/logos/uba-dark.png');
	const daVinciLogo = Chakra.useColorModeValue('/logos/da-vinci-light.png', '/logos/da-vinci-dark.png');
	return (
		<Experience.Card>
			<Chakra.Flex
				flexDirection={['column', 'column', 'row']}
				alignItems={'center'}
				justifyContent={['center', 'center', 'space-between']}
			>
				<Chakra.Box flexGrow={1}>
					<Experience.HeadingTitle fontSize="lg" display="inline-block">
						Software Analyst
					</Experience.HeadingTitle>
					<Chakra.Text mx={2} size="sm" display="inline">
						(Unfinished)
					</Chakra.Text>
					<Experience.HeadingSubtitle fontSize="lg">Da Vinci Institute</Experience.HeadingSubtitle>
				</Chakra.Box>
				<Chakra.Box my={2}>
					<Experience.HeadingImage width={140} height={50} src={daVinciLogo} alt="Da Vinci Institute logo" />
				</Chakra.Box>
			</Chakra.Flex>
			<Chakra.Divider my={6} />
			<Chakra.Flex
				flexDirection={['column', 'column', 'row']}
				alignItems={'center'}
				justifyContent={['center', 'center', 'space-between']}
			>
				<Chakra.Box flexGrow={1}>
					<Experience.HeadingTitle fontSize="lg" display="inline-block">
						Electronics Engineering
					</Experience.HeadingTitle>
					<Chakra.Text mx={2} size="sm" display="inline">
						(Unfinished)
					</Chakra.Text>
					<Experience.HeadingSubtitle fontSize="lg">Universidad Nacional de San Martin</Experience.HeadingSubtitle>
				</Chakra.Box>
				<Chakra.Box my={2}>
					<Experience.HeadingImage width={140} height={50} src={unsamLogo} alt="UNSAM logo" />
				</Chakra.Box>
			</Chakra.Flex>
			<Chakra.Divider my={6} />
			<Chakra.Flex
				flexDirection={['column', 'column', 'row']}
				alignItems={'center'}
				justifyContent={['center', 'center', 'space-between']}
			>
				<Chakra.Box flexGrow={1}>
					<Experience.HeadingTitle fontSize="lg">High School Comercial Bachelor</Experience.HeadingTitle>
					<Experience.HeadingSubtitle fontSize="lg">Escuela de Comercio Carlos Pellegrini</Experience.HeadingSubtitle>
				</Chakra.Box>
				<Chakra.Box mr={[0, 0, 6]} my={2}>
					<Experience.HeadingImage width={80} height={80} src={ubaLogo} alt="UBA logo" />
				</Chakra.Box>
			</Chakra.Flex>
		</Experience.Card>
	);
};

export default Education;
