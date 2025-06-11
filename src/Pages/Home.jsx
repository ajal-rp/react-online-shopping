import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  IconButton,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaHamburger } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { LuSearch, LuStar } from "react-icons/lu";
import Footer from "../components/ui/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network error");
        }
        response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <Box>
      {/* Navbar */}
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
        <Flex
          flex={1}
          maxW="600px"
          mx={4}
          display={{ base: "none", md: "flex" }}
        >
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

      {/* Hero Banner */}

      <Box
        bg="gray"
        p={8}
        textAlign="center"
        position="relative"
        h="600px"
        bgImage="url('banner.jpg')"
        bgSize="cover"
        backgroundPosition="center"
        bgRepeat="no-repeat"
      >
        <Box bg="blackAlpha.600" position="absolute" inset={0}></Box>
        <Box position="relative" xIndex={1} color="white" pt={32}>
          <Heading size="2xl" mb={4}>
            Summer Sale!
          </Heading>
          <Text fontSize={"xl"} mb={6}>
            Up to 50% off on selected items
          </Text>
          <Button
            bg={"orange"}
            p={2}
            _hover={{ backgroundColor: "#FFDBBB" }}
            size={"lg"}
          >
            Shop Now
          </Button>
        </Box>
      </Box>
      {/* Categories */}
      <Box p={8}>
        <Heading size="lg" mb={6} textAlign="center">
          Shop by Category
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
          {["Electronics", "Fashion", "Home", "Sports"].map((category) => (
            <Box
              key={category}
              p={1}
              bg="white"
              borderRadius="md"
              boxShadow="md"
              textAlign="center"
              gap={4}
              mx={4}
              my={2}
              color={"black"}
              cursor={"pointer"}
              _hover={{ transform: "scale(1.05)", transition: "all 0.2s" }}
            >
              <Text fontWeight="bold">{category}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Featured Products */}

      <Box p={8} bg="gray.100" color={"blackAlpha.600"}>
        <Heading size={"lg"} mb={6} textAlign={"center"}>
          Featured Products
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          {products &&
            products.map((product) => (
              <Box
                key={product.id}
                bg={"white"}
                borderRadius={"md"}
                overflow={"hidden"}
                boxShadow={"md"}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  h={"200px"}
                  w={100}
                  objectFit={"cover"}
                />
                <Box p={4}>
                  <Text fontWeight={"bold"}>{product.name}</Text>
                  <Text color={"teal.600"} fontWeight={"bold"} my={2}>
                    {product.price}
                  </Text>
                  <Flex justify={"space-between"} align={"center"}>
                    <Button colorScheme={"teal"} size={"sm"}>
                      Add to Cart
                    </Button>
                    <Flex align={"center"}>
                      <LuStar color="yellow.400" />
                      <Text ml={1}>{product.rating}</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            ))}
        </Grid>
      </Box>

      <Footer></Footer>
    </Box>
  );
};

export default Home;
