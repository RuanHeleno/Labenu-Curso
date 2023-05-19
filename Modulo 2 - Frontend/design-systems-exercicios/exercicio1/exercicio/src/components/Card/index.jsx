import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SocialProfileSimple(props) {
  const { user } = props;

  return (
    <Center py={6}>
      <Box
        maxW={"100%"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={`https://picsum.photos/seed/${user.name}/200/200`}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {user.name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {user.insta}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {user.job}
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          {user.tags.map((item, id) => (
            <Badge key={id} px={2} py={1} bg={"gray.50"} fontWeight={"400"}>
              {item}
            </Badge>
          ))}
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            color={"white"}
            bg={"blue.400"}
            _hover={{
              bg: "blue.700",
              transition: "all 400ms ease-in-out"
            }}
          >
            Message
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"green.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "green.700",
              transition: "all 400ms ease-in-out"
            }}
          >
            Follow
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
