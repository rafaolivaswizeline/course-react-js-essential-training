import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'

function Home() {
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

function About() {
  return (
    <>
      <h1>About page</h1>
      <nav>
        <Link to="/about/history"></Link>
      </nav>
      <Outlet></Outlet>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  )
}

function History() {
  return <p>Some nice text about the history of the company...</p>
}

function Contact() {
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}>
            <Route path="history" element={<History></History>}></Route>
          </Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
