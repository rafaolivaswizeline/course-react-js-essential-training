import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import About from './About'

describe('About component', () => {
  it('renders correctly', () => {
    render(
      <Router>
        <About />
      </Router>,
    )

    // Initial render checks
    expect(screen.getByText('About page')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Show history' })).toBeInTheDocument() // Checks if "Show history" link is initially rendered
  })

  it('toggles history visibility', () => {
    render(
      <Router>
        <About />
      </Router>,
    )

    // Initially, "Show history" should be visible
    const toggleLink = screen.getByRole('link', { name: 'Show history' })
    expect(toggleLink).toBeInTheDocument()

    // Click the link to toggle visibility
    fireEvent.click(toggleLink)

    // Now, "Hide history" should be visible
    expect(screen.getByRole('link', { name: 'Hide history' })).toBeInTheDocument()

    // Click again to toggle back
    fireEvent.click(screen.getByRole('link', { name: 'Hide history' }))
    expect(screen.getByRole('link', { name: 'Show history' })).toBeInTheDocument() // Verifies it toggles back
  })
})
