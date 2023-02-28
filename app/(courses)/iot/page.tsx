"use client";
import Course from "@/components/Course";
import React from "react";
import {
	Box,
	Card,
	CardBody,
	Container,
	Flex,
	Heading,
	ListItem,
	OrderedList,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import Core from "@/components/Core";
import Specialized from "@/components/Specialized";
import q4 from "../../../public/iot-q4.jpg";
import q5 from "../../../public/iot-q5.jpg";
const IOT = () => {
	let heading, courseName1, coursename2, courseDetail;
	heading = "Specialized Track";
	courseName1 = "Ambient Computing";
	coursename2 = "and IoT";
	courseDetail =
		"The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.";
	return (
		<>
			<Course
				Heading={heading}
				courseName1={courseName1}
				courseName2={coursename2}
				courseDetail={courseDetail}
				// image={image}
				bg={"#002F42"}
			/>
			<Core />
			<Specialized
				Title1='AC-351: Ambient Computing with Voice Assistants and Matter
				Devices'
				Title2='AC-361: Embedded Programming using C and Rust'
				img1={q4}
				img2={q5}
			/>
			<Container w={"100%"} maxW={"8xl"} mx={"auto"}>
				<Flex flexDir={"column"} alignItems={"center"} mx={"auto"} px='10'>
					<Heading
						fontSize={["xl", "2xl", "3xl", "4xl"]}
						fontWeight={["medium", "semibold", "bold", "extrabold"]}
						textAlign={"center"}>
						Detailed Course Syllabus
					</Heading>
					<Tabs mb={10}>
						<TabList
							width={{ base: "20%", md: "100%" }}
							// borderRight='1px'
							borderColor='gray.200'>
							<Tab>Q1</Tab>
							<Tab>Q2</Tab>
							<Tab>Q3</Tab>
							<Tab>Q4</Tab>
							<Tab>Q5</Tab>
						</TabList>
						<TabPanels width={{ base: "100%", md: "80%" }}>
							<TabPanel>
								<Box>
									<Heading size={"lg"}>
										CS-101: Object-Oriented Programming using TypeScript
									</Heading>
									<Heading size={"sm"} my={3}>
										Duration: 13 Weeks
									</Heading>

									<Heading size={"md"}>Course Description:</Heading>
									<Text>
										We will start the program by learning the fundamentals of
										Object-Oriented programming using JavaScript and TypeScript.
										We will also understand the latest Web trends i.e. Web 3.0
										and Metaverse concepts and try to understand their working
										from the perspective of the users.
									</Text>
									<Heading size={"md"}>Course Outline:</Heading>
									<OrderedList>
										<ListItem>HTML and CSS (Homework)</ListItem>
										<ListItem>Web 3.0 and Metaverse Theory</ListItem>
										<ListItem>Fundamentals of Typescript</ListItem>
										<ListItem>
											Object-Oriented Programming with TypeScript
										</ListItem>
										<ListItem>TypeScript for React</ListItem>
									</OrderedList>
								</Box>
							</TabPanel>
							<TabPanel>
								<Box>
									<Heading size={"lg"}>
										W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud
										Apps and APIs using Next.js 13 and Cloud Development Kit
										(CDK) for Terraform
									</Heading>
									<Heading size={"sm"} my={3}>
										Duration: 13 Weeks
									</Heading>

									<Heading size={"md"}>Course Description:</Heading>
									<Text>
										The objective of this course is to teach participants to
										develop customer-facing planet-scale Websites, Full-Stack
										Apps and templates, Dashboards, and Muti-Cloud Serverless
										APIs. By the end of the quarter, the participants will be
										able to develop and deploy web platforms like Facebook,
										Shopify, etc. The technologies covered in this course will
										include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC,
										QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL
										Compatible), AWS Serverless Technologies, and Cloud
										Development Kit for Terraform (CDKTF).
									</Text>
									<Heading size={"md"}>Course Outline:</Heading>
									<OrderedList>
										<ListItem>Next.js 13 Web Development </ListItem>
										<ListItem>
											Next.js 13 using Chakra UI (Remote Zoom Class)
										</ListItem>
										<ListItem>
											UI/UX Design with Figma, TailwindCSS, and Chakra UI
											(Remote Zoom Class)
										</ListItem>
										<ListItem>
											API Routes with Next.js (Remote Zoom Class)
										</ListItem>
										<ListItem>
											APIs with Next.js and tRPC (Remote Zoom Class)
										</ListItem>
										<ListItem>SQL and Prisma</ListItem>
										<ListItem>
											Next.js 13 using TailwindCSS (Remote Zoom Class)
										</ListItem>
										<ListItem>
											AWS Application Composer (Remote Zoom Class)
										</ListItem>
										<ListItem>
											Multi-Cloud GraphQL Serverless API Development with Cloud
											Development Kit for Terraform (CDKTF) (Remote Zoom Class)
										</ListItem>
									</OrderedList>
								</Box>
							</TabPanel>
							<TabPanel>
								<Box>
									<Heading size={"lg"}>
										$-101: Dollar Making Bootcamp - Full-Stack Template and API
										Product Development
									</Heading>
									<Heading size={"sm"} my={3}>
										Duration: 13 Weeks
									</Heading>

									<Heading size={"md"}>Course Description:</Heading>
									<Text>
										In this course, you will be tasked with building APIs and a
										template to be sold on the Panaverse DAO Marketplace and
										Theme Forest. The Panaverse DAO will receive 25% of the sale
										for platform management and an additional 15% for marketing
										purposes. 60% of the revenues will be distributed to the
										developer as Panaverse tokens.
									</Text>
									<Heading size={"md"}>Earn While You Learn Projects:</Heading>
									<OrderedList>
										<ListItem>
											Build Full-Stack Next.js 13 Jamstack Templates
										</ListItem>
										<ListItem>Build QraphQL APIs</ListItem>
									</OrderedList>
								</Box>
							</TabPanel>
							<TabPanel>
								<Box>
									<Heading size={"lg"}>
										AC-351: Ambient Computing with Voice Assistants and Matter
										Devices
									</Heading>
									<Heading size={"sm"} my={3}>
										Duration: 13 Weeks
									</Heading>

									<Heading size={"md"}>Course Description:</Heading>
									<Text>
										Ambient computing, also commonly referred to as ubiquitous
										computing, is the concept of blending computing power into
										our everyday lives in a way that is embedded into our
										surroundings - invisible but useful. In a multi-device
										world, people don&apos;t want to spend their life fussing
										with technology. An ambient approach gets the tech out of
										your way so you can live your life while getting the help
										you need. It doesn&apos;t matter what device you&apos;re
										using, what context you&apos;re in, whether you&apos;re
										talking, typing, or tapping. The technology in your life
										works together seamlessly. Ambient computing uses all
										aspects of modern-day technology, including voice
										assistants, artificial intelligence, sensors, connectivity,
										cloud computing and more. If you were thinking that the IoT
										and ambient computing sound a lot alike, you aren&apos;t
										wrong; the two concepts are intertwined. IoT refers to the
										vast array of devices that connect to the internet to
										optimize their functionality, like smart sensors and smart
										speakers: ambient computing builds on that. Ambient
										computing focuses on the interaction between these devices
										once they are connected. Matter, the next-generation smart
										home standard, solves many smart home pain points while
										bringing all our IoT devices together. Some of the biggest
										tech companies are working together to make Matter a unified
										protocol for future smart homes. These companies include
										Apple, Amazon, and Google. This means Apple HomeKit, Amazon
										Alexa, Samsung SmartThings, Google Nest, and Samsung
										SmartThings will support the Matter standard by default for
										all new devices. In this course we will learn to build smart
										homes with Amazon Alexa and Matter protocol.
									</Text>
									<Heading size={"md"}>Course Outline:</Heading>
									<OrderedList>
										<ListItem>Alexa Skill Developement</ListItem>
										<ListItem>Alexa with Matter Protocol</ListItem>
									</OrderedList>
								</Box>
							</TabPanel>
							<TabPanel>
								<Box>
									<Heading size={"lg"}>
										AC-361: Embedded Programming using C and Rust
									</Heading>
									<Heading size={"sm"} my={3}>
										Duration: 13 Weeks
									</Heading>

									<Heading size={"md"}>Course Description:</Heading>
									<Text>
										This is an introductory course about using the C and Rust
										Programming Languages on &ldquo;Bare Metal&ldquo; embedded
										systems, such as Microcontrollers. We will start by
										introducing embedded systems and move on to learn the C++
										and Rust programming languages. We&apos;ll learn about basic
										programming concepts using C and Rust, then we will explore
										key concepts in electronics, microcontrollers, and embedded
										programming. It is a fast-paced, thorough introduction to
										programming with C and Rust that will have you writing
										programs, solving problems, burning your code on
										microcontrollers, playing with GPIOs, and making things that
										work in no time.
									</Text>
									<Heading size={"md"}>Course Outline:</Heading>
									<OrderedList>
										<ListItem>
											Introduction to the Internet of Things and Embedded
											Systems
										</ListItem>
										<ListItem>Introduction to C</ListItem>
										<ListItem>C Programming</ListItem>
										<ListItem>Introduction to Embedded systems</ListItem>
										<ListItem>Embedded Programming using Rust</ListItem>
									</OrderedList>
								</Box>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Flex>
			</Container>
		</>
	);
};

export default IOT;
