import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SqlEditor from './components/SqlEditor'
import Result from './components/Result'

function App() {
  const [code, setCode] = useState('// hi sql')
  function updateCode(val){
    setCode(val);
  }
  return (
    <>
      <Navbar></Navbar>
      <div className='container flex'>
        <div className='w-89'>
        <Sidebar setcode ={updateCode}></Sidebar>
        </div>
        <div className='w-12'>
          <div>
          <SqlEditor code = {code}></SqlEditor>
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
