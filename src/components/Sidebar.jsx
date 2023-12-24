import React from 'react';
import Tables from './Tables';

const Sidebar = ({setcode}) => {
  const queryValue = [
    {
      query: 'select * from customers;',
      default: 1,
    },
    {
      query: 'select * from products;',
      default: 2,
    },
    {
      query: 'select * from suppliers;',
      default: 3,
    },
  ];

  function handleClick(val) {
    setcode(val);
  }

  return (
    <div className="sidebar flex flex-col">
      <div className="query">
        <h2 className="font-bold text-center text-lg bg-gray-100 h-8">Predefined Query</h2>
        {queryValue.map((item, index) => (
          <ul key={index} className='m-5' onClick={() => handleClick(item.query)}>
            <li
              className="font-semibold cursor-pointer bg-gray-300 hover:bg-gray-400 hover:text-white p-2 text-center text-m rounded-sm my-4"
            >
              {item.query}
            </li>
          </ul>
        ))}
      </div>
      <hr />
      <div className="tables">
        <h2 className="font-bold text-center text-lg bg-gray-100 h-8">Available Tables</h2>
        <Tables />
      </div>
    </div>
  );
};

export default Sidebar;
