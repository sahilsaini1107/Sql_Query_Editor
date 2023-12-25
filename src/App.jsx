import { useEffect, useState, useCallback } from "react";
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SqlEditor from './components/SqlEditor'
import Result from './components/Result'

function App() {
  const [tableRows, setTableRows] = useState([]);
  const [tableHead, setTableHead] = useState([]);
  const [query, setQuery] = useState("");
  const [csvData, setCsvData] = useState([]);
  const [code, setCode] = useState('');
  const [defaultValue, setDefaultValue] = useState(1);

  const updateCode = useCallback((val) => {
    setCode(val);
  }, []);

  useEffect(() => {
    const codeLower = code.toLowerCase();
    if (codeLower === "select * from customers;") {
      setDefaultValue(0);
    } else if (codeLower === "select * from products;") {
      setDefaultValue(1);
    } else if (codeLower === "select * from suppliers;") {
      setDefaultValue(2);
    } else if (codeLower === "select * from orders;") {
      setDefaultValue(3);
    } else {
      const codeValue = codeLower.split(" ");
      for (let i = 0; i < codeValue.length; i++) {
        switch (codeValue[i]) {
          case "customers":
            setDefaultValue(0);
            return;
          case "products":
            setDefaultValue(1);
            return;
          case "suppliers":
            setDefaultValue(2);
            return;
          case "orders":
            setDefaultValue(3);
            return;
          default:
            setDefaultValue(5);
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
      />
      <div className='container flex'>
        <div className='w-89'>
          <Sidebar setcode={updateCode} />
        </div>
        <div className='w-12'>
          <div>
            <SqlEditor code={code} setcode={updateCode} />
          </div>
          <div className="sqlresult">
            <Result query={query} head={tableHead} rows={tableRows} Data={csvData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
