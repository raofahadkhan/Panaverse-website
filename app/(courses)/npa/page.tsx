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
import q4 from "../../../public/npa-q4.jpg";
import q5 from "../../../public/npa-q5.jpg";
import Specialized from "@/components/Specialized";
const NPA = () => {
	let heading, courseName1, coursename2, courseDetail;
	heading = "Specialized Track";
	courseName1 = "Network Programmability";
	coursename2 = "and Automation";
	courseDetail =
		"More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.";
	return (
		<>
			<Course
				Heading={heading}
				courseName1={courseName1}
				courseName2={coursename2}
				courseDetail={courseDetail}
				// image={image}
				bg={"#2B4E97"}
			/>
			<Core />
			<Specialized
				Title1='NPA-351: CCNA 200-301 Certification'
				Title2='NPA-361: Network Programmability and Automation'
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
										NPA-351: CCNA 200-301 Certification
									</Heading>
									<Heading size={"sm"} my={3}>
										Duration: 13 Weeks
									</Heading>

									<Heading size={"md"}>Course Description:</Heading>
									<Text>
										This course will focus on learning the basics of the
										networking and preparing for the new Cisco Certified Network
										Associate (CCNA) exam. This comprehensive course focuses on
										the solutions and technologies needed to implement and
										administer a broad range of modern networking and IT
										infrastructure.
									</Text>
									<Heading size={"md"}>Course Outline:</Heading>
									<Text>To Be Announced Soon</Text>
								</Box>
							</TabPanel>
							<TabPanel>
								<Box>
									<Heading size={"lg"}>
										NPA-361: Network Programmability and Automation
									</Heading>
									<Heading size={"sm"} my={3}>
										Duration: 13 Weeks
									</Heading>

									<Heading size={"md"}>Course Description:</Heading>
									<Text>
										Traditional network management techniques can&apos;t be
										effectively automated and don&apos;t scale well. By
										implementing network programmability based on Application
										Programming Interfaces, this course will assist in
										overcoming issues of the future and help you develop the
										skills required for the Next-Generation Network Engineer.
									</Text>
									<Heading size={"md"}>Course Outline:</Heading>
									<Text>To Be Announced Soon</Text>
								</Box>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Flex>
			</Container>
		</>
	);
};

export default NPA;
