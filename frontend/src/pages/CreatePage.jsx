import React, { useState } from "react";
import {
  Button,
  Box,
  Container,
  Input,
  Stack,
  InputGroup,
  Heading,
  useColorModeValue,
  VStack,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product";

export const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleNewProduct = async () => {
    // console.log(newProduct);
    const { success, message } = await createProduct(newProduct);
    console.log("Success:", success);
    console.log("Message:", message);
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading
          as={"h1"}
          size={"xl"}
          textAlign={"center"}
          mb={8}
          color={"blue.500"}
        >
          Create New Product
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
          borderRadius={"md"}
        >
          <HStack>
            {/* <Badge gap={3} colorPalette="teal" variant="solid">
              Add New
            </Badge> */}
          </HStack>
          <VStack spacing={4}>
            {" "}
            <Input
              name="name"
              value={newProduct.name}
              placeholder="Name"
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              name="price"
              value={newProduct.price}
              placeholder="Price"
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              name="image"
              value={newProduct.image}
              placeholder="Image URL"
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <Button colorScheme="blue" onClick={handleNewProduct}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};
