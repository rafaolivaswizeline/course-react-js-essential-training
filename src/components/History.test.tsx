import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import History from './History'

describe('History component', () => {
  it('renders correctly', () => {
    render(
      <Router>
        <History />
      </Router>,
    )

    // Initial render checks
    expect(screen.getByText('Some nice text about the history of the company...')).toBeInTheDocument()
  })
})
