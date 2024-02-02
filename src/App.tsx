import { useRef } from 'react'
import './App.css'

function App() {
  const color = useRef<HTMLInputElement>(null)
  const text = useRef<HTMLInputElement>(null)

  function send() {
    if (!color.current || !text.current) return
    alert(`${color.current.value}, ${text.current.value}`)
    color.current.value = ''
    text.current.value = ''
  }

  return (
    <>
      <form onSubmit={send}>
        <input type="text" placeholder="color" ref={text} />
        <input type="color" ref={color} />
        <button>send</button>
      </form>
    </>
  )
}

export default App
