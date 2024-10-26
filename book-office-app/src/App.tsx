import './App.css'
import { HashRouter } from 'react-router-dom'
import { AppRoutes } from "./Routes"
import { useGlobalProps } from "./hooks/useGlobalProps"

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  const globalProps = useGlobalProps();

  return (
    <HashRouter>
      <AppRoutes {...globalProps} />
    </HashRouter>
  )
}

export default App
