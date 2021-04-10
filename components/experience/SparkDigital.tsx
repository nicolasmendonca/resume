import React from "react";
import { Box, Image, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import Experience from "./Experience";

interface SparkDigitalExperienceProps {}

const SparkDigitalExperience: React.FC<SparkDigitalExperienceProps> = () => {
  return (
    <Experience.Card>
      <Experience.Heading>
        <Box>
          <Experience.HeadingTitle>
            Senior Software Engineer
          </Experience.HeadingTitle>
          <Experience.HeadingSubtitle>
            Spark Digital / Macmillan
          </Experience.HeadingSubtitle>
        </Box>
        <Experience.HeadingImages>
          <Experience.HeadingImage
            src="/logos/macmillan.png"
            alt="Macmillan Learning logo"
          />
          <Experience.HeadingImage
            src="/logos/spark.png"
            alt="Spark Digital logo"
          />
        </Experience.HeadingImages>
      </Experience.Heading>
      <Experience.Text>
        At Spark Digital I've worked as a contractor for Macmillan Education on
        a product called{" "}
        <Experience.Link href="https://www.macmillanlearning.com/college/us/digital/sapling" isExternal>
          Sapling Learning
        </Experience.Link>
        .<br />
        It consisted on a platform where educators can create evaluations based on educational books, institutions, courses and training material.
      </Experience.Text>

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
    </Experience.Card>
  );
};

export default SparkDigitalExperience;
