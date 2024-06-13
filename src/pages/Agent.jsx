import { useParams } from "react-router-dom";
import { Box, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const Agent = () => {
  const { id } = useParams();

  return (
    <Box p={4}>
      <Heading mb={4}>Customize Agent {id}</Heading>
      <FormControl id="name" mb={4}>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Enter agent name" />
      </FormControl>
      <FormControl id="role" mb={4}>
        <FormLabel>Role</FormLabel>
        <Input placeholder="Enter agent role" />
      </FormControl>
      <FormControl id="task" mb={4}>
        <FormLabel>Task Parameters</FormLabel>
        <Input placeholder="Enter task parameters" />
      </FormControl>
      <Button colorScheme="teal">Save</Button>
    </Box>
  );
};

export default Agent;