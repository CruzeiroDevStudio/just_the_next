import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the app', () => {
  render(<App />)
  const title = screen.getByText(/just the next/i)
  expect(title).toBeInTheDocument()
})
