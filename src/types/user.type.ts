import Task from "./task.type"
import Token from "./token.type"

type User = {
  name: string,
  email: string,
  password: string,
  tokens: Token[],
  tasks: Task[]
}

export default User