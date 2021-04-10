import { Flex, chakra, Image, Link, useColorModeValue } from "@chakra-ui/react";
import NextImage from "next/image";

const BaseCard = chakra("section", {
  baseStyle: {
    p: 6,
    mt: 6,
    borderRadius: 5,
    bg: "gray.800",
    _first: { mt: 8 },
    _last: { pb: 6 },
  },
});

const Experience = {
  Card: (props: any) => {
    const bgColor = useColorModeValue("gray.200", "gray.800");
    return <BaseCard bgColor={bgColor} {...props} />;
  },
  Text: chakra("p", {
    baseStyle: {
      pt: 6,
      _last: {
        pb: 6,
      },
    },
  }),
  Heading: chakra(Flex, {
    baseStyle: {
      mt: 0,
      position: "relative",
      alignItems: {
        base: "flex-start",
        md: "center",
      },
      justifyContent: "space-between",
      flexDir: {
        base: "column",
        md: "row",
      },
    },
  }),
  HeadingTitle: chakra("h3", {
    baseStyle: {
      fontSize: "24px",
      fontWeight: "bold",
    },
  }),
  HeadingSubtitle: chakra("p", {
    baseStyle: {
      fontSize: ["18px", "18px", "24px"],
      fontWeight: "thin",
    },
  }),
  HeadingImages: chakra(Flex, {
    baseStyle: {
      mt: [2, 2, 0],
    },
  }),
  HeadingImage: chakra(NextImage, {
    shouldForwardProp: (prop) =>
      ["alt", "src", "width", "height"].includes(prop),
    baseStyle: {
      margin: "0 auto",
      objectFit: "contain",
      maxHeight: {
        base: "24px",
        md: "36px",
      },
      ml: 2,
      _first: {
        ml: 0,
      },
    },
  }),
  Link: chakra(Link, {
    baseStyle: {
      color: "purple.400",
      fontWeight: "bold",
      _hover: {
        textDecoration: "underline",
      },
    },
  }),
};

export default Experience;
