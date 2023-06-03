// import { useState } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import { AllRoutes } from '../src/routing/AllRoutes';

function App() {
  // const [count, setCount] = useState(0)

  return (
      <Router>
        <AllRoutes/>
      </Router>
  )
}

export default App
