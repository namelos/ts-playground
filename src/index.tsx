import * as React from 'react'
import { render } from 'react-dom'

import { Hello } from './component.tsx'

render(<Hello compiler="Typescript" framework="React"/>,
  document.querySelector('#root'))
