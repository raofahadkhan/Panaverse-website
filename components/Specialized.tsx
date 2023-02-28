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
import { StaticImageData } from "next/image";

interface Course {
  Title1: string;
  Title2: string;
  img1: StaticImageData;
  img2: StaticImageData;
}
const Specialized = ({ Title1, img1, Title2, img2 }: Course) => {
  return (
    <>
      <Container w={"100%"} maxW={"8xl"} mx={"auto"}>
        <Flex flexDir={"column"} alignItems={"center"} mx={"auto"} px="10">
          <Box as="section" mx={[null, null, 14, null]}>
            <Text
              mt={"4"}
              mb={"4"}
              textAlign={"center"}
              fontSize={["xl", "2xl", "3xl", "4xl"]}
              fontWeight={["medium", "semibold", "bold", "extrabold"]}
            >
              Specialized Courses
            </Text>
            <Grid
              mb={5}
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
              ]}
              gap={[2, 2, 4, 4]}
            >
              <GridItem>
                <Card
                  direction={"column"}
                  maxW="sm"
                  // minH={"350px"}
                  h={"400px"}
                  textAlign={"center"}
                  my={"auto"}
                >
                  <Image
                    src={img1.src}
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
                      Quarter IV
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>{Title1}</Text>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem>
                <Card
                  direction={"column"}
                  maxW="sm"
                  h={"400px"}
                  textAlign={"center"}
                  my={"auto"}
                >
                  <Image
                    src={img2.src}
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
                      Quarter V
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>{Title2}</Text>
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

export default Specialized;
