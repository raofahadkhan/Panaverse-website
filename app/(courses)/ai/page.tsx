"use client";
import Core from "@/components/Core";
import Course from "@/components/Course";
import Specialized from "@/components/Specialized";
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
import React from "react";
import q4 from "../../../public/ai-q4.jpg";
import q5 from "../../../public/ai-q5.jpg";

const AI = () => {
	let heading, courseName1, coursename2, courseDetail;
	heading = "Specialized Track";
	courseName1 = "Artificial Intelligence and";
	coursename2 = "Deep Learning";
	courseDetail =
		"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.";
	return (
		<>
			<Course
				Heading={heading}
				courseName1={courseName1}
				courseName2={coursename2}
				courseDetail={courseDetail}
				// image={image}
				bg={"#19225D"}
			/>
			<Core />
			<Specialized
				Title1='AI-351: Developing Planet-Scale Intelligent APIs and Python Programming'
				Title2='AI-361: Deep Learning and MLOps'
				img2={q4}
				img1={q5}
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
										AI-351: Developing Planet-Scale Intelligent APIs and Python
										Programming
									</Heading>
									<Heading size={"sm"} my={3}>
										Duration: 13 Weeks
									</Heading>

									<Heading size={"md"}>Course Description:</Heading>
									<Text>
										Artificial intelligence is the simulation of human
										intelligence processes by machines, especially computer
										systems. The AI and Deep Learning Specialization is a
										foundational program that will aid in your comprehension of
										deep learning&apos;s potential, difficulties, and effects as
										well as equip you to take part in the creation of
										cutting-edge AI technology. We will start this course by
										understanding the fundamentals and use cases for AI and move
										on to building next-gen intelligent apps using OpenAI&apos;s
										powerful models and Next.js 13. We&apos;ll conclude the
										course by learning about basic programming concepts using
										Python, such as lists, dictionaries, classes, functions, and
										loops, and practice writing clean and readable code with
										exercises for each topic. We&apos;ll also learn how to make
										your programs interactive and how to test your code safely
										before adding it to a project. It is a fast-paced, thorough
										introduction to programming with Python 3.10+ that will have
										you writing programs, solving problems, and making things
										that work in no time. In this quarter we will also learn
										Git, the distributed version control system. We will also
										review Git-based GitHub services.
									</Text>
									<Heading size={"md"}>Course Outline:</Heading>
									<OrderedList>
										<ListItem>
											Introduction to Machine Learning, Data Science, and AI
										</ListItem>
										<ListItem>
											Building Next-Gen Intelligent Apps with OpenAI&apos;s
											Powerful Models We will cover GPT-4, ChatGPT, etc. and
											Next.js 13
										</ListItem>
										<ListItem>
											Python Crash Course for TypeScript Developers
										</ListItem>
									</OrderedList>
								</Box>
							</TabPanel>
							<TabPanel>
								<Box>
									<Heading size={"lg"}>AI-361: Deep Learning and MLOps</Heading>
									<Heading size={"sm"} my={3}>
										Duration: 13 Weeks
									</Heading>

									<Heading size={"md"}>Course Description:</Heading>
									<Text>
										This course will help you understand the capabilities,
										challenges, and consequences of deep learning and prepare
										you to participate in the development of leading-edge AI
										technology. We will finish the program by learning how to
										envision, create, and maintain integrated systems that run
										constantly in production. Production systems must manage
										constantly changing data, in stark contrast to typical
										machine learning modeling. The production system must also
										operate continuously at the lowest possible cost while
										delivering the highest possible performance.
									</Text>
									<Heading size={"md"}>Course Outline:</Heading>
									<OrderedList>
										<ListItem>Deep Learning with Tensorflow</ListItem>
										<ListItem>
											Machine Learning Engineering for Production (MLOps) using
											Terraform for CDK
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

export default AI;
