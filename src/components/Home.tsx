import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  )
}
