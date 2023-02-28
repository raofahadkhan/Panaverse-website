"use client";
import Core from "@/components/Core";
import Course from "@/components/Course";
import Specialized from "@/components/Specialized";
import q4 from "../../../public/bcc-q4.jpg";
import q5 from "../../../public/bcc-q5.jpg";
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
const BCC = () => {
	let heading, courseName1, coursename2, courseDetail;
	heading = "Specialized Track";
	courseName1 = "Web 3.0 (Blockchain)";
	coursename2 = "and Metaverse";
	courseDetail =
		"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.";
	return (
		<>
			<Course
				Heading={heading}
				courseName1={courseName1}
				courseName2={coursename2}
				courseDetail={courseDetail}
				// image={image}
				bg={"#00777D"}
			/>
			<Core />
			<Specialized
				Title1='W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps'
				Title2='MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences'
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
										W3-351: Developing Smart Contracts and Planet-Scale Web 3.0
										Dapps
									</Heading>
									<Heading size={"sm"} my={3}>
										Duration: 13 Weeks
									</Heading>

									<Heading size={"md"}>Course Description:</Heading>
									<Text>
										In this course you will learn how to develop Web 3.0 DApps,
										create a project, deploy it in production, write smart
										contracts, unit test them, and create user interfaces for
										them. We will also learn to develop ERC-20 and NFT tokens,
										DAOs, Oracles, etc. Please note that in order to develop Web
										3 applications you also need to build on top of Web 2.0
										technologies which we have already covered in the previous
										quarters.
									</Text>
									<Heading size={"md"}>Course Outline:</Heading>
									<OrderedList>
										<ListItem>Blockchain and Metaverse Theory</ListItem>
										<ListItem>Smart Contract Development in Solidity</ListItem>
										<ListItem>
											Dapp Development using Ethers.js and Next.js 13
										</ListItem>
										<ListItem>Tokennomics</ListItem>
										<ListItem>
											Blockchain Project: Create a Token and Launch ICO/IEO/IDO
										</ListItem>
									</OrderedList>
								</Box>
							</TabPanel>
							<TabPanel>
								<Box>
									<Heading size={"lg"}>
										MV-361: Developing Planet-Scale Open Virtual and Augmented
										Metaverse Experiences
									</Heading>
									<Heading size={"sm"} my={3}>
										Duration: 13 Weeks
									</Heading>

									<Heading size={"md"}>Course Description:</Heading>
									<Text>
										The Web is the Metaverse. The metaverse requires an
										infrastructure that connects all of the metaverses so that
										we can travel between them. This is only achievable with
										open web-based metaverses. The internet and its browsers are
										magical. Federated but linked experiences connect pages,
										people, technology, businesses, standards, and nations.
										It&apos;s unlike anything else. The metaverse should
										replicate the best qualities of the web - it should just be
										the web. We just have to extend online responsive design
										from mobile to desktop to 3D, Augmented Reality, and Virtual
										Reality. This course will teach you how to build the Open
										Social Spatial Web with WebXR and WebGPU technologies.
									</Text>
									<Heading size={"md"}>Course Outline:</Heading>
									<OrderedList>
										<ListItem>Open Metaverse Web Development </ListItem>
										<ListItem>
											Blender 3D asset Creation for the Metaverse (Remote Zoom
											Class)
										</ListItem>
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

export default BCC;
