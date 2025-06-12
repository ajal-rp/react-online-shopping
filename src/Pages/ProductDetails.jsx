import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Skeleton,
  SkeletonCircle,
  Stack,
  Text,
} from "@chakra-ui/react";
import NavBar from "../components/ui/NavBar";
import Footer from "../components/ui/Footer";
import { Container } from "@chakra-ui/react";
import { LuStar } from "react-icons/lu";
import { FaDollarSign } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productsData from "../../public/data.json";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    try {
      const foundProduct = productsData.find((p) => p.id == id);
      if (!foundProduct) throw new Error("Product not found");
      setProduct(foundProduct);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }, [id]);

  if (!product) {
    return (
      <HStack>
        <SkeletonCircle size={12}>
          <Stack flex={1}>
            <Skeleton height={5}></Skeleton>
            <Skeleton height={5} width={"80%"}></Skeleton>
          </Stack>
        </SkeletonCircle>
      </HStack>
    );
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
