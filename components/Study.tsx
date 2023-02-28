import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Pic from "../public/Coding-Guy.png";
const Study = () => {
  return (
    <>
      <Container w={"100%"} maxW={"8xl"} mx={"auto"} px={4}>
        <Flex
          flexDir={["column", "column", "column", "row"]}
          alignItems={["center", "center", null, null]}
          px="10"
          mx={"auto"}
          pt="14"
        >
          <Box
            as="section"
            flex={"1"}
            mb={["8", "8", null, null]}
            order={[2, 1, 2, 1]}
          >
            <Box
              as="div"
              maxW={["300px", null, "400px", "400px"]}
              mx={[0, null, "auto", null]}
            >
              <Image
                src={Pic.src}
                w="max-content"
                h={["300px", null, "400px", "400px"]}
                alt={""}
                m="auto"
              />
            </Box>
          </Box>
          <Box
            as="section"
            flex={"1"}
            textAlign={"start"}
            mb={["14", "14", null, null]}
            order={[1, 2, 1, 2]}
          >
            <Heading
              fontSize={["xl", "2xl", "3xl", "4xl"]}
              fontWeight={["medium", "semibold", "bold", "extrabold"]}
              mt={"3"}
            >
              Program of Studies
            </Heading>
            <Text fontSize={["md", "lg", "xl", "2xl"]} mt={"1"}>
              This curriculum is intended for beginners who want to learn
              software development from the ground up. The first three quarters
              are shared by all specialties and are dedicated to studying
              Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
              development. It is going to be a fifteen-month-long hybrid program
              that includes both onsite and online classes and is divided into
              five quarters of 13 weeks each. The emphasis will be on hands-on
              learning by educating students to produce projects. To accommodate
              everyone, courses will be held primarily on weekends or after 6:00
              p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching
              format, with core onsite classes complemented by online Zoom
              laboratories and recorded videos.
            </Text>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Study;
