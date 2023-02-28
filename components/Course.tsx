"use client";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

interface Details {
  Heading: string;
  courseName1: string;
  courseName2: string;
  courseDetail: string;
  bg: string;
}

const Course = ({
  Heading,
  courseName1,
  courseName2,
  courseDetail,
  bg,
}: Details) => {
  // bgColor={"#333333"}
  // blue #19225D -- ai
  // green #002F42 -- iot
  // green #00777D -- bcc
  // blue #002144 --cnc
  // blue #2B4E97 -- npa
  // purple #240C44 --gab
  return (
    <Box as="main" color={"white"} w="100%" bgColor={bg}>
      <Container w={"100%"} maxW={"8xl"} mx="auto" px={"4"}>
        <Flex
          flexDir={["column", "column", "row", "row"]}
          alignItems={["center", "center", null, null]}
          px="10"
          mx={"auto"}
          pt="14"
        >
          <Box
            as="section"
            flex={"1"}
            textAlign={"start"}
            mb={["14", "14", null, null]}
            // h={["100vh", "100vh", "50vh", "50vh"]}
            h="50vh"
          >
            <Text
              fontSize={["lg", "xl", "2xl", "3xl"]}
              fontWeight={["medium", "semibold", "bold", "extrabold"]}
              mt={["8", "10", "12", "14"]}
            >
              {Heading}
            </Text>

            <Text
              fontSize={["2xl", "3xl", "4xl", "5xl"]}
              fontWeight={["medium", "semibold", "bold", "extrabold"]}
              mt={"3"}
            >
              {courseName1} {courseName2}
            </Text>
            <Text
              fontSize={["sm", "md", "lg", "xl"]}
              // fontWeight={"medium"}
              mt={"1"}
              mb={["0.5", "0.5", "0", "0"]}
            >
              {courseDetail}
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Course;
