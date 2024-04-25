import Task from "../types/task.type"
import { Box, Stack, Button, ButtonGroup, Heading } from '@chakra-ui/react'

const TaskC = ({title, completed}:Task) => {
  return (
    <>
      <Box p={5} shadow='md' borderWidth='1px'>
            <Stack direction='row' alignItems='center' justifyItems='center' justifyContent='space-between'>
            <Heading>{title}</Heading>
            <ButtonGroup spacing='2'>
              <Button colorScheme={completed ? 'green' : 'blue'} variant='outline'>{completed ? "Completa" : "Pendente"}</Button>
              <Button colorScheme='red' variant='solid'>Excluir</Button>
            </ButtonGroup>
            </Stack>
      </Box>
    </>
  )
}

export default TaskC