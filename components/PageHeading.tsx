import {
  Heading,
  Text,
  useColorModeValue,
  Circle,
  Image,
  Flex,
  Container,
  Box,
  Grid,
  Link,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'
import React from "react";

const PageHeading: React.FC = () => {
  const headingBg = useColorModeValue("gray.100", "gray.800");

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
          <Image
            borderRadius="50%"
            src="/profile.jpeg"
            alt="Profile picture"
            width="120px"
            height="120px"
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
              <Button as={Link} isExternal variant="ghost">
                <AddIcon />
              </Button>
            </Tooltip>
            <Tooltip label="Linkedin">
              <Button as={Link} isExternal variant="ghost">
                <AddIcon />
              </Button>
            </Tooltip>
            <Tooltip label="Email">
              <Button as={Link} isExternal variant="ghost">
                <AddIcon />
              </Button>
            </Tooltip>
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};

export default PageHeading;
