import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [primaryEmotion, setPrimaryEmotion] = useState('happy')
  const [secondaryEmotion, setSecondaryEmotion] = useState('grateful')

  useEffect(() => {
    console.log('App component was rendered')
  }, []) // this empty array makes this hook be executed only on the first render

  useEffect(() => {
    console.log(`Emotions changed: ${primaryEmotion}, ${secondaryEmotion}`)
  }, [primaryEmotion, secondaryEmotion]) // when any emotion changes this will be triggered

  useEffect(() => {
    console.log(`Primary emotion changed: ${primaryEmotion}`)
  }, [primaryEmotion]) // this will be trigger only when primary emotion changes

  useEffect(() => {
    console.log(`Secondary emotion changed: ${secondaryEmotion}`)
  }, [secondaryEmotion]) // this will be trigger only when secondary emotion changes

  return (
    <>
      <h1>
        I'm {primaryEmotion} and {secondaryEmotion}
      </h1>
      <section>
        <button onClick={() => setPrimaryEmotion('happy')}>Happy</button>
        <button onClick={() => setPrimaryEmotion('sad')}>Sad</button>
      </section>
      <section>
        <button onClick={() => setSecondaryEmotion('grateful')}>Grateful</button>
        <button onClick={() => setSecondaryEmotion('tired')}>Tired</button>
      </section>
    </>
  )
}

export default App
