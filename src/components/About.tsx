import { useReducer } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function About() {
  const [isHistoryVisible, toggleHistoryVisibility] = useReducer((state) => !state, false)

  return (
    <>
      <h1>About page</h1>
      <nav>
        {!isHistoryVisible ? (
          <Link to="/about/history" onClick={() => toggleHistoryVisibility()}>
            Show history
          </Link>
        ) : (
          <Link to="/about" onClick={() => toggleHistoryVisibility()}>
            Hide history
          </Link>
        )}
      </nav>
      <Outlet></Outlet>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  )
}
