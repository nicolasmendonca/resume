import React from "react";
import {
  Box,
  Flex,
  Heading,
  Container,
  useColorMode,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Particles from "react-particles-js";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import AgileEngineExperience from "../components/experience/AgileEngine";
import IntiveFDVExperience from "../components/experience/IntiveFDV";
import SparkDigitalExperience from "../components/experience/SparkDigital";
import PageHeading from '../components/PageHeading';

const CONFIG = {
  particlesHeight: "350px",
};

interface IIndexPageProps {}

const IndexPage: React.FC<IIndexPageProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bodyBg = useColorModeValue("gray.300", "gray.700");

  return (
    <Box minHeight="100vh" backgroundColor={bodyBg}>
      <Button
        position="fixed"
        top="0"
        right="0"
        mt={0}
        onClick={toggleColorMode}
        variant="ghost"
        zIndex={2}
      >
        {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
      </Button>
      <Box>
        <Box
          width="full"
          top="-1px"
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
          </Flex>
        </Box>
      </Box>
      <PageHeading />
      <Box my="0" py="12">
        <Container maxW="container.md">
          <Heading as="h2">Experience</Heading>
          <AgileEngineExperience />
          <SparkDigitalExperience />
          <IntiveFDVExperience />
        </Container>
      </Box>
    </Box>
  );
};

export default IndexPage;
