import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Contact from './Contact'

describe('Contact component', () => {
  it('renders correctly', () => {
    render(
      <Router>
        <Contact></Contact>
      </Router>,
    )

    expect(screen.getByText('Contact page')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })
})
