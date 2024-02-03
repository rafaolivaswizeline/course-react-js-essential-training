import { useState } from 'react'
import './App.css'

interface Color {
  text: string
  code: string
}

function useColorInput(color: Color) {
  const [text, setText] = useState(color.text)
  const [code, setCode] = useState(color.code)

  function reset() {
    setText(color.text)
    setCode(color.code)
  }

  return [{ text, code }, { setText, setCode }, reset] as [
    Color,
    {
      setText: (value: string) => void
      setCode: (value: string) => void
    },
    () => void,
  ]
}

function App() {
  const [{ text, code }, { setText, setCode }, resetColor] = useColorInput({ text: '', code: '#ffffff' })

  function send() {
    alert(`${text}, ${code}`)
    resetColor()
  }

  return (
    <>
      <form onSubmit={send}>
        <input type="text" placeholder="color" value={text} onChange={(event) => setText(event.target.value)} />
        <input type="color" value={code} onChange={(event) => setCode(event.target.value)} />
        <button>send</button>
      </form>
    </>
  )
}

export default App
