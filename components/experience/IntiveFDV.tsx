import React from "react";
import {
  Box,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Experience from "./Experience";

interface IIntiveFDVExperienceProps {}

const IntiveFDVExperience: React.FC<IIntiveFDVExperienceProps> = () => {
  return (
    <Experience.Card>
      <Experience.Heading>
        <Box>
          <Experience.HeadingTitle>
            Senior Software Engineer
          </Experience.HeadingTitle>
          <Experience.HeadingSubtitle>
            IntiveFDV
          </Experience.HeadingSubtitle>
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
      </Experience.Heading>
      <Experience.Text>
        At IntiveFDV I've worked on a product called Intelligize
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

export default IntiveFDVExperience;
