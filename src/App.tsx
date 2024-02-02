import { useState } from 'react'
import './App.css'

function App() {
  const [emotion, setEmotion] = useState('happy')

  return (
    <>
      <h1>I'm {emotion}</h1>
      <button onClick={() => setEmotion('happy')}>Happy</button>
      <button onClick={() => setEmotion('sad')}>Sad</button>
      <button onClick={() => setEmotion('excited')}>Excited</button>
      <button onClick={() => setEmotion('tired')}>Tired</button>
    </>
  )
}

export default App
