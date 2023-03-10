"use client";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Logo from "../public/panaverse-logo.webp";

const Navbar = () => {
  return (
    <>
      <Box
        position={"sticky"}
        top={0}
        zIndex={1}
        as="header"
        display={["flex", "flex", "flex", "flex"]}
        backgroundColor="rgba(255, 
 255, 255, 0.8)"
        backdropFilter="saturate(180%) blur(5px)"
      >
        <Flex
          w={"100%"}
          px={[null, null, 6, 6, 6]}
          py={5}
          align={"center"}
          justify="space-between"
        >
          <Link href="/">
            <Image src={Logo.src} w="24" alt="DAO Logo" />
          </Link>
          <HStack spacing="5">
            <Link href={"/"}>
              <Button variant="nav">Home</Button>
            </Link>
            <Menu>
              <MenuButton
                as={Button}
                variant={"nav"}
                rightIcon={<ChevronDownIcon />}
              >
                Courses
              </MenuButton>
              <MenuList>
                <Link href="/ai">
                  <MenuItem>
                    <Text fontSize={"sm"}>Artificial Intelligence (AI)</Text>
                  </MenuItem>
                </Link>
                <Link href="/iot">
                  <MenuItem>
                    <Text fontSize={"sm"}>IoT and Ambient Computing (IOT)</Text>
                  </MenuItem>
                </Link>
                <Link href="/cnc">
                  <MenuItem>
                    <Text fontSize={"sm"}>Cloud-Native Computing (CNC)</Text>
                  </MenuItem>
                </Link>
                <Link href="/bcc">
                  <MenuItem>
                    <Text fontSize={"sm"}>BlockChain Computing (BCC)</Text>
                  </MenuItem>
                </Link>

                <Link href="/gab">
                  <MenuItem>
                    <Text fontSize={"sm"}>
                      Genomics and Bioinformatics (GaB)
                    </Text>
                  </MenuItem>
                </Link>
                <Link href="/npa">
                  <MenuItem>
                    <Text fontSize={"sm"}>
                      Network Programmability and Automation (NPA)
                    </Text>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
