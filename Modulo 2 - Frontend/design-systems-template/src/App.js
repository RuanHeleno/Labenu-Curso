import axios from "axios";
import { useEffect, useState } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";

import Card from "./components/Card";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (
    <ChakraProvider>
      <Flex gap="6" wrap="wrap" justify="center" maxWidth={"100%"}>
        {users.map((item, id) => (
          <Card key={id} item={item}  />
        ))}
      </Flex>
    </ChakraProvider>
  );
}
