import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
      <h1>Contact page</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  )
}
