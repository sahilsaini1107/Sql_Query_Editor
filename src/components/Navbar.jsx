import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">Sql-Query-Editor</a>
        <ul className="flex space-x-4">
          <li><button className="text-white flex mx-auto  bg-gray-500 border-0 py-2 h-10 px-4 focus:outline-none hover:bg-gray-600 rounded text-lg justify-center items-center">Run Query</button></li>
          {/* <li><a href="https://github.com/sahilsaini1107/Sql_Query_Editor" className="text-white">View source code</a></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
