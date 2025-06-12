import { Button, Flex, Heading, IconButton, Input } from "@chakra-ui/react";
import React from "react";
import { FaHamburger } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      p="4"
      bg="teal.500"
      color="white"
    >
      <Flex align="center">
        <IconButton
          variant="ghost"
          // aria-label="Menu"
          display={{ base: "block", md: "none" }}
        >
          <Flex justify="center" alignItems="center">
            <FaHamburger />
          </Flex>
        </IconButton>
        <Heading size="md" ml={2}>
          ShopEasy
        </Heading>
      </Flex>
      <Flex flex={1} maxW="600px" mx={4} display={{ base: "none", md: "flex" }}>
        <Input placeholder="Search products" bg="white" color="black" />
        <IconButton colorScheme="teal" ml={2}>
          <LuSearch />
        </IconButton>
      </Flex>
      <Flex align="center">
        <Button variant="ghost" mr={2}>
          <FaCartShopping />
          Cart(3)
        </Button>
        <Button colorScheme="teal">Login</Button>
      </Flex>
    </Flex>
  );
};

export default NavBar;
