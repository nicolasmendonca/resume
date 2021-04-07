import React from "react";
import {
  Box,
  Image,
  Flex,
  Text,
  Heading,
  Center,
  Divider,
  Stack,
  Container,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Particles from "react-particles-js";

const CONFIG = {
  particlesHeight: "350px",
};

interface IIndexPageProps {}

const IndexPage: React.FC<IIndexPageProps> = () => {
  return (
    <Box className="IndexPage" minHeight="100vh" backgroundColor="gray.200">
      <Box>
        <Box
          width="full"
          alignItems="flex-end"
          justifyContent="center"
          height={CONFIG.particlesHeight}
          background="linear-gradient(45deg, rgba(104,9,121,1) 15%, rgba(233,0,255,1) 100%)"
          position="relative"
          boxShadow="md"
        >
          <Flex alignItems="center" justifyContent="center">
            <Particles
              width="100vw"
              height={CONFIG.particlesHeight}
              params={{
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "grab",
                    },
                  },
                },
              }}
            />
            <Image
              position="absolute"
              bottom="0"
              transform="translateY(50%)"
              src="https://avatars.githubusercontent.com/u/22284473?v=4"
              alt="Profile picture"
              borderRadius="50%"
              width="256"
              height="256"
            />
          </Flex>
        </Box>
      </Box>
      <Stack
        alignItems="center"
        boxShadow="lg"
        pt="36"
        pb="6"
        backgroundColor="gray.100"
      >
        <Heading>Nicolás Mendonca</Heading>
        <Divider />
        <Text as="h2" fontSize="xl" letterSpacing="tight">
          Full Stack Dev
        </Text>
      </Stack>
      <Box my="0" py="12">
        <Container>
          <Heading as="h2">Experience</Heading>
          <Box as="section" py="12">
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Heading as="h3" size="lg">
                  Agile Engine
                </Heading>
                <Heading as="p" size="md" fontWeight="thin">
                  Lead Software Engineer
                </Heading>
              </Box>
              <Box>
                <Image
                  display="inline-block"
                  mt="0"
                  src="/logos/indeed.png"
                  alt="Indeed logo"
                  width="84px"
                />
                <Image
                  display="inline-block"
                  src="/logos/agile-engine.png"
                  alt="Agile Engine logo"
                  width="36px"
                  height="36px"
                />
              </Box>
            </Stack>
            <Text pt="6">
              I've been working as a contractor full time dedicated to{" "}
              <Link href="https://www.indeed.com" color="purple" isExternal>
                Indeed.com
              </Link>{" "}
              for a year. I started out as a senior frontend developer, and I
              started to take ownership of the project and guide other devs,
              I've been promoted to a <Text as="b">Team Lead</Text> role. After
              a year of hard work,{" "}
              <Text as="b">
                I ended up leading 4 development teams, composed by 16
                developers.
              </Text>
            </Text>
            <Text pt="6">
              My work consisted in helping{" "}
              <Link href="https://www.indeed.com" color="purple" isExternal>
                Indeed.com
              </Link>{" "}
              achieving accessibility compliance in the homepage, messaging app,
              employers panel, and over 30 products more.
            </Text>

            <Text pt="6">
              This task required a lot of communication skills, coordination,
              planning, and tracking the team's work. On the technical side,
              I've worked with many monorepos, libraries, apps and plugins with
              both new and old codebases; and I contributed to different teams
              following their respective workflows and guidelines.
            </Text>

            <Text pt="6">
              The tech stack I used during this job included the following:
              <UnorderedList>
                <ListItem>React.js</ListItem>
                <ListItem>Typescript</ListItem>
                <ListItem>Lerna</ListItem>
                <ListItem>Accessibility</ListItem>
                <ListItem>Jest</ListItem>
                <ListItem>Enzyme</ListItem>
                <ListItem>@testing-lib/react</ListItem>
                <ListItem>Cypress</ListItem>
                <ListItem>Python</ListItem>
                <ListItem>Django + djangorestframework</ListItem>
              </UnorderedList>
            </Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default IndexPage;
