import { Box, Flex, Button, Link, Spacer } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="white" px={4} py={2} boxShadow="md">
      <Flex alignItems="center">
        <Link href="/" fontSize="2xl" fontWeight="bold">
          TenFAST
        </Link>
        <Spacer />
        <Link href="/fastighetssystem" mx={2}>
          Fastighetssystem
        </Link>
        <Link href="/om-oss" mx={2}>
          Om oss
        </Link>
        <Link href="/pris" mx={2}>
          Pris
        </Link>
        <Link href="/support" mx={2}>
          Support
        </Link>
        <Spacer />
        <Button colorScheme="teal" variant="outline" mx={2}>
          Kom igång
        </Button>
        <Button colorScheme="teal" mx={2}>
          Logga in
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;