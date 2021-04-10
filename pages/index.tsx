import React, { Suspense } from "react";
import {
  Box,
  Heading,
  Container,
  useColorMode,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import AgileEngineExperience from "../components/experience/AgileEngine";
import SparkDigitalExperience from "../components/experience/SparkDigital";
import PageHeading from '../components/PageHeading';

const Particles = dynamic(() => import("../components/Particles"));

interface IIndexPageProps {}

const IndexPage: React.FC<IIndexPageProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bodyBg = useColorModeValue("gray.100", "gray.700");

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
        <Particles />
      </Box>
      <PageHeading />
      <Box my="0" py="12">
        <Container maxW="container.md">
          <Heading as="h2">Experience</Heading>
          <AgileEngineExperience />
          <SparkDigitalExperience />
        </Container>
      </Box>
    </Box>
  );
};

export default IndexPage;
