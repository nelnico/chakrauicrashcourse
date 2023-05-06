import { UnlockIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
  Avatar,
  AvatarBadge
} from "@chakra-ui/react";

export default function Navbar() {

  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out of your account.",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon />
    });
  }

  return (
    <Flex as="nav" p="10px" mb="4px" alignItems="center" gap="10px">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Avatar src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.500">
              <Text fontSize="xs" color="white">3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>marion@netninja.dev</Text>
        <Button colorScheme="purple" onClick={showToast}>Logout</Button>
      </HStack>
    </Flex>
  );
}
