import React from "react"
import {createRoot} from 'react-dom/client'

const root = createRoot(document.getElementById('root'))

const App = () => {
  fetch('/api').then(data => data.json()).then(data => console.log(data))
  return (
    <div>
      hello
    </div>
  )
}

root.render(<App/>)