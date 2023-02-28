import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <>
      <Box as="main" w="100%">
        <Container w={"100%"} maxW={"8xl"} mx={"auto"}>
          <Flex flexDir={"column"} alignItems={"center"} mx={"auto"}>
            <Box as="section" w={"100%"}>
              <Heading
                mt={"4"}
                textAlign={"center"}
                fontSize={["xl", "2xl", "3xl", "4xl"]}
                fontWeight={["medium", "semibold", "bold", "extrabold"]}
              >
                About Panaverse DAO
              </Heading>
              <Text
                mt={"5"}
                mb={"10"}
                textAlign={"center"}
                fontSize={["md", "lg", "xl", "2xl"]}
              >
                The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
                Panaverse DAO is a movement to spread these technolgies
                globally. It is community of Web 3 and Metaverse developers,
                designers, trainers, startup founders and service providers.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default About;
