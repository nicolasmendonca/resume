import * as Chakra from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { SiLinkedin, SiGmail, SiGithub } from 'react-icons/si';

const NextImage = Chakra.chakra(Image, {
	shouldForwardProp: (prop) => ['src', 'alt', 'width', 'height'].includes(prop),
});

const PageHeading: React.FC = () => {
	const headingBg = Chakra.useColorModeValue('gray.200', 'gray.800');

	return (
		<Chakra.Box boxShadow="xl" backgroundColor={headingBg} py="6" borderRadius="md">
			<Chakra.Container
				display="flex"
				flexDirection={['column', 'column', 'row']}
				alignItems="center"
				justifyContent="space-between"
				maxW="container.md"
			>
				<Chakra.Circle mx="6" borderRadius="50%" backgroundColor="white" height="124px" width="124px" boxShadow="md">
					<NextImage borderRadius="50%" src="/profile.jpeg" alt="Profile picture" width={120} height={120} />
				</Chakra.Circle>
				<Chakra.Flex mr={[0, 0, 6]} alignItems={['center', 'center', 'flex-end']} flexDirection="column">
					<Chakra.Heading>Nicolás Mendonca</Chakra.Heading>
					<Chakra.Text as="h2" fontSize="xl" letterSpacing="tight" py="2">
						Full Stack Dev
					</Chakra.Text>
					<Chakra.Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="2">
						<Chakra.Tooltip label="Github">
							<Chakra.Button
								as={Chakra.Link}
								title="Github"
								isExternal
								variant="ghost"
								href="https://github.com/nicolasmendonca"
							>
								<SiGithub />
							</Chakra.Button>
						</Chakra.Tooltip>
						<Chakra.Tooltip label="Linkedin">
							<Chakra.Button
								as={Chakra.Link}
								title="Linkedin"
								isExternal
								variant="ghost"
								href="https://www.linkedin.com/in/nicolas-mendonca-2705ba67/"
							>
								<SiLinkedin />
							</Chakra.Button>
						</Chakra.Tooltip>
						<Chakra.Tooltip label="Email">
							<Chakra.Button
								as={Chakra.Link}
								title="Email"
								isExternal
								variant="ghost"
								href="mailto:nicolasmendonca@gmail.com"
							>
								<SiGmail />
							</Chakra.Button>
						</Chakra.Tooltip>
					</Chakra.Grid>
				</Chakra.Flex>
			</Chakra.Container>
		</Chakra.Box>
	);
};

export default PageHeading;
