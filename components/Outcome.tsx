import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import outcome from "../public/outcome.jpg";

const Outcome = () => {
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
            textAlign={"start"}
            mb={["14", "14", null, null]}
          >
            <Text
              fontSize={["xl", "2xl", "3xl", "4xl"]}
              fontWeight={["medium", "semibold", "bold", "extrabold"]}
              mt={"3"}
            >
              The Outcome for Participants of the Program
            </Text>
            <Text fontSize={["md", "lg", "xl", "2xl"]} mt={"1"}>
              The graduates of this program will own products (Full-Stack App
              Templates, AR and VR Experiences, and APIs) that are marketed
              globally by the Panaverse DAO and, if they like, will also be able
              to start off by offering services at a rate of $50 per hour
              ($96,000 per year). This would give Pakistani professionals and
              students a fantastic opportunity to better their financial
              situation while also giving the economy a much-needed boost by
              expanding software exports.
            </Text>
          </Box>
          <Box as="section" flex={"1"} mb={["8", "8", null, null]}>
            <Box
              as="div"
              maxW={["300px", null, "400px", "400px"]}
              // minW={"400px"}
              mx={[0, null, "auto", null]}
            >
              <Image
                src={outcome.src}
                w="max-content"
                h={["300px", null, "400px", "400px"]}
                alt={"President of Pakistan Dr. Arif Alvi"}
                m="auto"
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Outcome;
