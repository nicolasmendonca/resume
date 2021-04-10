import React from 'react'
import {
  Box,
  Image,
  Text,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Experience from './Experience'

interface IAgileEngineExperienceProps {}

const AgileEngineExperience: React.FC<IAgileEngineExperienceProps> = () => {
  return (
    <Experience.Card>
      <Experience.Heading>
        <Box flexGrow={1}>
          <Experience.HeadingTitle>
            Lead Software Engineer
          </Experience.HeadingTitle>
          <Experience.HeadingSubtitle>
            Agile Engine / Indeed
          </Experience.HeadingSubtitle>
        </Box>
        <Experience.HeadingImages>
          <Experience.HeadingImage
            width={140}
            height={36}
            src="/logos/indeed.png"
            alt="Indeed logo"
          />
          <Experience.HeadingImage
            width={36}
            height={36}
            src="/logos/agile-engine.png"
            alt="Agile Engine logo"
          />
        </Experience.HeadingImages>
      </Experience.Heading>
      <Experience.Text>
        I've been working as a contractor full time dedicated to{" "}
        <Link href="https://www.indeed.com" color="purple.400" fontWeight="bold" isExternal>
          Indeed.com
        </Link>{" "}
        for a year, which is the #1 job search platform in the world. I started out as a senior frontend developer, and I started
        to take ownership of the project and guide other devs, I've been
        promoted to a <Text as="b">Team Lead</Text> role. After a year of hard
        work,{" "}
        <Text as="b">
          I ended up leading 4 development teams, composed by 16 developers.
        </Text>
      </Experience.Text>
      <Experience.Text>
        My work consisted in helping{" "}
        <Experience.Link href="https://www.indeed.com"  isExternal>
          Indeed.com
        </Experience.Link>{" "}
        achieve accessibility compliance in over 30 products, coordinate work
        with stakeholders, train my team, and lead them to success.
      </Experience.Text>

      <Experience.Text>
        This task required a lot of communication skills, coordination,
        planning, and tracking the team's work. On the technical side, I've
        worked with many monorepos, libraries, apps and plugins with both new
        and old codebases; and I contributed to different teams following their
        respective workflows and guidelines.
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
}

export default AgileEngineExperience
