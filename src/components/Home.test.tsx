import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Home from './Home' // Adjust the import path as necessary

describe('Home component', () => {
  it('renders correctly', () => {
    render(
      <Router>
        <Home></Home>
      </Router>,
    )

    expect(screen.getByText('Home page')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })
})
