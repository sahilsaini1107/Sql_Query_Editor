import React from 'react';
import Table from './Table'
const Navbar = ({
  setQuery,
  setTableHead,
  setTableRows,
  setCsvData,
  code,
  defaultValue,
}) => {

  const runQuery = () => {
    setQuery(code);
    const { Headers, rows } = Table(defaultValue);
    setTableHead(Headers);
    setTableRows(rows);
    const temp = [];
    if (Headers.length > 0 && rows.length > 0) {
      temp.push(Headers);
      rows.forEach((row) => {
        temp.push(row);
      });
      setCsvData(temp);
    }
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">Sql-Query-Editor</a>
        <ul className="flex space-x-4">
          <li><button className="text-white flex mx-auto  bg-gray-500 border-0 py-2 h-10 px-4 focus:outline-none hover:bg-gray-600 rounded text-lg justify-center items-center" onClick={runQuery}>Run Query</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
