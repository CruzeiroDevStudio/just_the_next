import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import App from './App'

test('renders the app', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>,
  )

  const title = screen.getByTestId('main-logo')
  expect(title).toBeInTheDocument()
})
