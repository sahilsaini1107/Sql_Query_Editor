import { useEffect, useState } from "react";
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SqlEditor from './components/SqlEditor'
import Result from './components/Result'

function App() {
  const [tableRows, setTableRows] = useState([]);
  const [tableHead, setTableHead] = useState([]);
  const [query, setQuery] = useState("");
  const [defaultValue, setDefaultValue] = useState(1);
  const [csvData, setCsvData] = useState([]);
  const [code, setCode] = useState('')

  function updateCode(val){
    setCode(val);
  }

  useEffect(() => {
    if (code.toLowerCase() === "select * from customers;") {
      setDefaultValue(0);
    } else if (code.toLowerCase() === "select * from products;") {
      setDefaultValue(1);
    } else if (code.toLowerCase() === "select * from suppliers;") {
      setDefaultValue(2);
    } else if (code.toLowerCase() === "select * from orders;") {
      setDefaultValue(3);
    } else {
      let codeValue = code.toLowerCase().split(" ");
      let found = false;
      for (let i = 0; i < codeValue.length && !found; i++) {
        switch (codeValue[i]) {
          case "customers":
            setDefaultValue(0);
            found = true;
            break;
          case "products":
            setDefaultValue(1);
            found = true;
            break;
          case "suppliers":
            setDefaultValue(2);
            found = true;
            break;
          case "orders":
            setDefaultValue(3);
            found = true;
            break;
          default:
            setDefaultValue(5);
            break;
        }
      }
    }
  }, [code]);
  


  return (
    <>
      <Navbar 
        setQuery={setQuery}
        setTableHead={setTableHead}
        setTableRows={setTableRows}
        setCsvData={setCsvData}
        code={code}
        defaultValue={defaultValue}
      ></Navbar>
      <div className='container flex'>
        <div className='w-89'>
        <Sidebar setcode ={updateCode}></Sidebar>
        </div>
        <div className='w-12'>
          <div>
          <SqlEditor code = {code} setcode ={updateCode}></SqlEditor>
          </div>
          <div className="sqlresult">
          <Result query={query} head={tableHead} rows={tableRows} Data={csvData}></Result>
          </div>
        </div>
      </div>
    </>
  )
}

export default App