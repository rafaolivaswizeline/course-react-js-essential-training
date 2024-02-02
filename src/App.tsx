import { useReducer } from 'react'
import './App.css'

function App() {
  const [checked, setChecked] = useReducer((checked) => !checked, false)

  return (
    <>
      <input id="checkbox" type="checkbox" value={checked.toString()} onChange={setChecked} />
      <label htmlFor="checkbox">{checked ? 'Checked' : 'Not checked'}</label>
    </>
  )
}

export default App
