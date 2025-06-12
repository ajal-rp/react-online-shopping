import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import NavBar from "../components/ui/NavBar";
import Footer from "../components/ui/Footer";
import { Container } from "@chakra-ui/react";
import { LuStar } from "react-icons/lu";
import { FaDollarSign } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const foundProduct = data.find((product) => product.id == id);
        if (!foundProduct) {
          throw new Error("Product not found");
        }
        setProduct(foundProduct);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]); // Added id as dependency

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <NavBar />
      <Container p={5}>
        <Flex
          gap={6}
          justifyContent={"space-around"}
          alignItems={"center"}
          mx={"auto"}
          width={"50%"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={"auto"}
            objectFit="contain"
          />
          <Flex
            width={"100%"}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={4}
          >
            <Heading textAlign="center">{product.title}</Heading>
            <Flex align={"center"}>
              {Array.from({ length: 5 }).map((_, i) => (
                <LuStar
                  key={i}
                  color={i < Math.round(product.rating) ? "#FFD700" : "#E2E8F0"}
                  style={{ marginRight: 2 }}
                />
              ))}
              <Text ml={1}>{product.rating.toFixed(1)}</Text>
            </Flex>
            <Heading display="flex" alignItems="center">
              <FaDollarSign /> {product.price}
            </Heading>
            <Text>{product.description}</Text>
            <Flex gap={4} mt={4}>
              <Button variant={"outline"} p={3}>
                <FaDollarSign /> Buy Now
              </Button>
              <Button variant={"outline"} p={3}>
                <FaCartShopping /> Add To Cart
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};

export default ProductDetails;
