import { Stack, Box, HStack, Image, Card } from "@chakra-ui/react";
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <Card flexDirection="row" overflow="hidden" maxW="xl">
      <Image
        //   border="1px solid red"
        //   rounded="md"
        h="200px"
        w="300px"
        fit="contain"
        src={product.image}
      ></Image>
    </Card>
  );
};
