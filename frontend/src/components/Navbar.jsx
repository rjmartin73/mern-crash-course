import React from "react";
import {
  Button,
  Container,
  Flex,
  Text,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { MdOutlineLightbulbCircle, MdLightbulbCircle } from "react-icons/md";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      maxW="1140px"
      px={4}
      // fluid
      // border={"1px solid cyan"}
      // borderRadius={"md"}
      // bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link to="/">Product Store</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            {" "}
            <Button>
              <CiSquarePlus fontSize={20}></CiSquarePlus>
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <MdOutlineLightbulbCircle size={20} />
            ) : (
              <MdLightbulbCircle size={20} />
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

// export default Navbar;
