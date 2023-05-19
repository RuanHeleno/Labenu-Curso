import { ChakraProvider, Flex } from "@chakra-ui/react";

import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const data = [
    {
      id: "1",
      name: "Ruan Heleno",
      insta: "@ruanhelenoof",
      job: "Web Frontend Developer",
      tags: ["#IT", "#FRONTEND", "#FREELANCER"],
    },
    {
      id: "2",
      name: "Sida Santos",
      insta: "@sidasantos",
      job: "Web designer, Nail designer, Hair stylist",
      tags: ["#GIRLPOWER", "#STUDYING", "#DOING"],
    },
    {
      id: "3",
      name: "Italo Ferraz",
      insta: "@italoferraz",
      job: "Salesman, Customer helper",
      tags: ["#FULLSTACKLEARNING", "#STUDYING", "#DOING"],
    },
  ];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ChakraProvider>
      <Flex gap={6} justify="center" >
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </Flex>
    </ChakraProvider>
  );
}

export default App;
