import { Button, Checkbox, Input, Stack } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import api from "../hooks/Axios"

type TaskFormP = {
    getdata(): void
}

type PostTarefa = {
    title: string,
    completed?: boolean
}

const TaskForm = ({getdata}:TaskFormP) => {
    const [nomeTarefa, setNomeTarefa] = useState('')
    const [stateTarefa, setStateTarefa] = useState(false)

    function adicionarTarefa(){
        if(nomeTarefa != ''){
            const novaTarefa:PostTarefa = {
                title: nomeTarefa,
                completed: stateTarefa
            }
            api.post('/task',novaTarefa)
            .then(() => {
                setNomeTarefa('')
                getdata()
            })
        }
    }
    const inputTarefa = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        if(inputTarefa.current) inputTarefa.current.focus()
    }, [])

    return (
        <>
        <Stack spacing={3} direction='row' alignItems='center' justifyItems='center'>
            <Input
            ref={inputTarefa}
            value={nomeTarefa}
            onChange={(evento) => setNomeTarefa(evento.target.value)}
            placeholder="Título da tarefa" 
            size='md' />
            <Checkbox onChange={(e) => setStateTarefa(e.target.checked)}>Realizada? </Checkbox>
            <Button onClick={adicionarTarefa} colorScheme='blue'>Inserir</Button>
        </Stack>
        </>
    )
}

export default TaskForm

