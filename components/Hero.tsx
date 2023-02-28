"use client";
import Logo from "../public/President.webp";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <>
      <Box as="main" bgColor={"blackAlpha.100"} color={"black"} w="100%">
        <Container w={"100%"} maxW={"8xl"} mx={"auto"} px={4}>
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
            >
              <Text
                fontSize={["sm", "md", "large", "sm"]}
                fontWeight={["bold", "black", "extrabold", "extrabold"]}
                mt={["8", "10", "12", "14"]}
              >
                Presidential Initiative for Artificial Intelligence and Cloud
                Computing (PIAIC)
              </Text>

              <Text
                fontSize={["2xl", "3xl", "4xl", "5xl"]}
                fontWeight={["bold", "black", "extrabold", "extrabold"]}
                mt={"3"}
              >
                Certified Web 3.0 &
              </Text>
              <Text
                fontSize={["2xl", "3xl", "4xl", "5xl"]}
                fontWeight={["bold", "black", "extrabold", "extrabold"]}
                mt={"-px"}
              >
                Metaverse Developer
              </Text>
              <Text
                fontSize={"large"}
                fontWeight={"medium"}
                mt={"1"}
                mb={["10", "10", "0", "0"]}
              >
                A One and Quarter Years Panaverse DAO Earn as you Learn Program
                Getting Ready for the Next Generation of the Internet
                Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
                Cloud, Edge, Ambient Computing/IoT, Network Automation, and
                Bioinformatics Technologies
              </Text>
            </Box>
            <Box as="section" flex={"1"}>
              <Box
                as="div"
                maxW={["150px", null, "80%", "50%"]}
                minW={"150px"}
                mx={[0, null, "auto", null]}
              >
                <Image
                  src={Logo.src}
                  w="max-content"
                  h={"500px"}
                  alt={"President of Pakistan Dr. Arif Alvi"}
                  m="auto"
                />
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
