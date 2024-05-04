import Task from "../types/task.type"
import { Box, Stack, Button, ButtonGroup, Heading } from '@chakra-ui/react'

type TaskCP = {
  apagarTarefa(id: number): void
  alterarStatus(task: Task): void
}  & Task

const TaskC = ({id, title, completed, apagarTarefa, alterarStatus}:TaskCP) => {
  return (
    <>
      <Box p={5} shadow='md' borderWidth='1px'>
            <Stack direction='row' alignItems='center' justifyItems='center' justifyContent='space-between'>
            <Heading>{title}</Heading>
            <ButtonGroup spacing='2'>
              <Button colorScheme={completed ? 'green' : 'blue'} variant='outline' onClick={() => alterarStatus({id, title, completed})}>{completed ? "Completa" : "Pendente"}</Button>
              <Button onClick={() => apagarTarefa(id)} colorScheme='red' variant='solid'>Excluir</Button>
            </ButtonGroup>
            </Stack>
      </Box>
    </>
  )
}

export default TaskC