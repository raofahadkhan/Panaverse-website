import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import typescript from "../public/typescript.png";
import nextjs from "../public/Nextjs.png";
import dollar from "../public/dollar.jpg";

const Core = () => {
  return (
    <>
      <Container w={"100%"} maxW={"8xl"} mx={"auto"}>
        <Flex flexDir={"column"} alignItems={"center"} mx={"auto"} px="10">
          <Box as="section" mx={[null, null, 14, null]}>
            <Heading
              mt={"4"}
              mb={"4"}
              textAlign={"center"}
              fontSize={["xl", "2xl", "3xl", "4xl"]}
              fontWeight={["medium", "semibold", "bold", "extrabold"]}
            >
              Core Courses (Common in All Specializations)
            </Heading>
            <Grid
              mb={5}
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap={[2, 2, 4, 4]}
            >
              <GridItem>
                <Card
                  direction={"column"}
                  maxW="sm"
                  minH={"350px"}
                  textAlign={"center"}
                  my={"auto"}
                >
                  <Image
                    src={typescript.src}
                    w={"100%"}
                    h="200px"
                    alt={""}
                    borderTopRadius={"md"}
                  />
                  <CardHeader my={"auto"}>
                    <Heading
                      size={["sm", "sm", "md", "lg"]}
                      mt={4}
                      fontWeight={["medium", "semibold", "bold", "extrabold"]}
                    >
                      {/* {Title} */}
                      Quarter I (Core)
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>
                      CS-101: Object-Oriented Programming using TypeScript
                    </Text>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem>
                <Card
                  direction={"column"}
                  maxW="sm"
                  minH={"350px"}
                  textAlign={"center"}
                  my={"auto"}
                >
                  <Image
                    src={nextjs.src}
                    w={"100%"}
                    h={"200px"}
                    alt={""}
                    borderTopRadius={"md"}
                  />
                  <CardHeader my={"auto"}>
                    <Heading
                      size={["sm", "sm", "md", "lg"]}
                      mt={4}
                      fontWeight={["medium", "semibold", "bold", "extrabold"]}
                    >
                      {/* {Title} */}
                      Quarter II (Core)
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>
                      W2-201: Developing Planet-Scale Web 2.0 Apps using Next.js
                      13
                    </Text>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem>
                <Card
                  direction={"column"}
                  maxW="sm"
                  minH={"350px"}
                  textAlign={"center"}
                  my={"auto"}
                >
                  <Image
                    src={dollar.src}
                    w={"100%"}
                    h="200px"
                    alt={""}
                    borderTopRadius={"md"}
                  />
                  <CardHeader my={"auto"}>
                    <Heading
                      size={["sm", "sm", "md", "lg"]}
                      mt={4}
                      fontWeight={["medium", "semibold", "bold", "extrabold"]}
                    >
                      {/* {Title} */}
                      Quarter III (Core)
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>
                      $-101: Dollar Making Bootcamp - Full-Stack Template
                      Development
                    </Text>
                  </CardBody>
                </Card>
              </GridItem>
            </Grid>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Core;
