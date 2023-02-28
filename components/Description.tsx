import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Pic from "../public/STUDIO PC 2072-20.jpg";
const Description = () => {
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
            <Heading
              fontSize={["xl", "2xl", "3xl", "4xl"]}
              fontWeight={["medium", "semibold", "bold", "extrabold"]}
              mt={"3"}
            >
              The Program in a Nutshell: Earn While You Learn
            </Heading>
            <Text
              fontSize={["md", "lg", "xl", "2xl"]}
              // fontWeight={"medium"}
              mt={"1"}
            >
              In this brand-new type of curriculum, students will learn how to
              make money and boost exports in the classroom and will begin doing
              so within six months of the program&apos;s beginning. It resembles
              a cross between a corporate venture and an educational project.
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
                src={Pic.src}
                w="max-content"
                h={["300px", null, "400px", "400px"]}
                alt={""}
                m="auto"
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Description;
