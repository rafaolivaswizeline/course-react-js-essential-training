import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('#ffffff')
  const [text, setText] = useState('')

  function send() {
    alert(`${color}, ${text}`)
    setColor('#ffffff')
    setText('')
  }

  return (
    <>
      <form onSubmit={send}>
        <input type="text" placeholder="color" value={text} onChange={(event) => setText(event.target.value)} />
        <input type="color" value={color} onChange={(event) => setColor(event.target.value)} />
        <button>send</button>
      </form>
    </>
  )
}

export default App
