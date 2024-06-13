import { Box, Heading, FormControl, FormLabel, Input, Button, Textarea } from "@chakra-ui/react";

const TaskManagement = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Task Management</Heading>
      <FormControl id="task" mb={4}>
        <FormLabel>Task</FormLabel>
        <Textarea placeholder="Enter task details" />
      </FormControl>
      <FormControl id="assignTo" mb={4}>
        <FormLabel>Assign To</FormLabel>
        <Input placeholder="Enter agent ID" />
      </FormControl>
      <Button colorScheme="teal">Assign Task</Button>
    </Box>
  );
};

export default TaskManagement;