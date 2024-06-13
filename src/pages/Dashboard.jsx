import { Box, Heading, SimpleGrid, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>AI Agents Dashboard</Heading>
      <SimpleGrid columns={2} spacing={10}>
        {[1, 2, 3, 4].map((agent) => (
          <Box key={agent} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Agent {agent}</Heading>
            <Text mt={4}>Role: <i>Customizable Role</i></Text>
            <Text mt={4}>Status: <i>Idle</i></Text>
            <Button mt={4} as={Link} to={`/agent/${agent}`}>Customize</Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;