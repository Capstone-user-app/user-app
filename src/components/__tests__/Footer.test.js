import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'

import Footer from '../general/footer'


test('loads footer and displays it', async () => {
  render(<Footer/>)
  expect(screen.getByText('Pinflag'))

})
