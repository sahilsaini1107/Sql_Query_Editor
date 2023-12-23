import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SqlEditor from './components/SqlEditor'
import Result from './components/Result'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <div className='conatiner flex'>
        <div className='w-89'>
        <Sidebar></Sidebar>
        </div>
        <div className='w-12'>
          <div>
          <SqlEditor></SqlEditor>
          </div>
          <div className="sqlresult">
          <Result></Result>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
