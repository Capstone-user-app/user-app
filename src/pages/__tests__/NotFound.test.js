import React from 'react'
import '@testing-library/jest-dom'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import {createMemoryHistory} from 'history'

import NotFoundPage from '../NotFound'


test('loads and displays 404, button redirects to home page', async () => {
  const history = createMemoryHistory()
  render(<NotFoundPage/>)
  expect(screen.getByText('404'))

  // do stuff which leads to redirection
  fireEvent.click(screen.getByText('Devuelta a la pagina principal'))
  // then
  await waitFor(() => {
    expect(history.location.pathname).toBe('/')
  })
})
