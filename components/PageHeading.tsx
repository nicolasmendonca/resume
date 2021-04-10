import {
  Heading,
  Text,
  useColorModeValue,
  Circle,
  Flex,
  Container,
  Box,
  Grid,
  Link,
  Button,
  Tooltip,
  chakra,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { SiLinkedin, SiGmail, SiGithub } from "react-icons/si";

const NextImage = chakra(Image, {
  shouldForwardProp: (prop) => ["src", "alt", "width", "height"].includes(prop),
});

const PageHeading: React.FC = () => {
  const headingBg = useColorModeValue("gray.200", "gray.800");

  return (
    <Box
      zIndex="1"
      width="full"
      boxShadow="xl"
      backgroundColor={headingBg}
      py="6"
    >
      <Container
        display="flex"
        flexDirection={["column", "column", "row"]}
        alignItems="center"
        justifyContent="space-between"
        maxW="container.md"
      >
        <Circle
          mx="6"
          borderRadius="50%"
          backgroundColor="white"
          height="124px"
          width="124px"
          boxShadow="md"
        >
          <NextImage
            borderRadius="50%"
            src="/profile.jpeg"
            alt="Profile picture"
            width={120}
            height={120}
          />
        </Circle>
        <Flex
          mr={[0, 0, 6]}
          alignItems={["center", "center", "flex-end"]}
          flexDirection="column"
        >
          <Heading>Nicolás Mendonca</Heading>
          <Text as="h2" fontSize="xl" letterSpacing="tight" py="2">
            Full Stack Dev
          </Text>
          <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="2">
            <Tooltip label="Github">
              <Button
                as={Link}
                title="Github"
                isExternal
                variant="ghost"
                href="https://github.com/nicolasmendonca"
              >
                <SiGithub />
              </Button>
            </Tooltip>
            <Tooltip label="Linkedin">
              <Button
                as={Link}
                title="Linkedin"
                isExternal
                variant="ghost"
                href="https://www.linkedin.com/in/nicolas-mendonca-2705ba67/"
              >
                <SiLinkedin />
              </Button>
            </Tooltip>
            <Tooltip label="Email">
              <Button
                as={Link}
                title="Email"
                isExternal
                variant="ghost"
                href="mailto:nicolasmendonca@gmail.com"
              >
                <SiGmail />
              </Button>
            </Tooltip>
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};

export default PageHeading;
