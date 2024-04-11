import { useState } from "react"

type InputBoxProps = {
  defaultValue?: string,
  label?: string,
  type: string,
  id: string
}

export default function InpuxBox({defaultValue = '', label, type, id}:InputBoxProps) {
const [Value, setValue] = useState(defaultValue)
  return (
    <>
      {label && (
        <label htmlFor={id}>
          {label.charAt(0).toUpperCase() + label.slice(1)}&nbsp;
        </label>
      )}
      <input type={type} name="text" 
      id={id} 
      value={Value} 
      onChange={((e) => setValue(e.target.value))}
      />
    </>
  )
}