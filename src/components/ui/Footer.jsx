import {
  Box,
  Button,
  DialogPropsProvider,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bg={"gray.800"} color={"white"} p={8}>
      <SimpleGrid
        columns={{ base: 1, md: 4 }}
        borderSpacing={8}
        maxW={"1200px"}
        mx={"auto"}
      >
        <Box>
          <Heading size={"md"} mb={4}>
            ShopEasy
          </Heading>
          <Text>The best online shopping experience</Text>
        </Box>
        <Box>
          <Heading size={"sm"} mb={4}>
            HELP
          </Heading>
          <Stack>
            <Text>Contact Us</Text>
            <Text>Careers</Text>
            <Text>Privacy Policy</Text>
          </Stack>
        </Box>
        <Box>
          <Heading size={"sm"} mb={4}>
            FOLLOW US
          </Heading>
          <Flex gap={4}>
            <Button variant={"ghost"} p={2}>
              Facebook
            </Button>
            <Button variant={"ghost"} p={2}>
              Instagram
            </Button>
            <Button variant={"ghost"} p={2} >
              Twitter
            </Button>
          </Flex>
        </Box>
      </SimpleGrid>
      <Text textAlign={"center"}>
        &copy; 2025 ShopEsay, All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
