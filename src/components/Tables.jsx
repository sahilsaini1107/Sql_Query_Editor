import schema from '../data/tables.json';
import {useState} from 'react';
const Tables = () => {
  const [curr, setCurr] = useState(9);
  function handleClick(value) {
    // You might want to handle the click logic here
    if(value == "customers"){
      curr===0?setCurr(9):setCurr(0);  
    }else if(value == "products"){
      curr===1?setCurr(9):setCurr(1);
    }else if(value == "suppliers"){
      curr===2?setCurr(9):setCurr(2);
    }else if(value === "orders"){
      curr===3?setCurr(9):setCurr(3);
    }
  }

  return (
    <div>
      {schema.map((value, index) => {
        const tablesSchema = Object.entries(value.tableSchema);

        return (
          <div key={index}>
            <ul className='flex m-5 mb-5 cursor-pointer bg-gray-300 hover:bg-gray-400 hover:text-white p-2 text-center text-m rounded-sm my-4 justify-center' onClick={()=>handleClick(value.tableName)}>
              <li className='font-semibold mr-2 text-lg text-center'>{value.tableName}</li>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </ul>

            {tablesSchema.map((item, ind) => (
              <ul key={ind} className={curr === value.tableSchema.key ? 'flex font-semibold m-2 visible' : 'hidden'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <li>{item[0]}</li>
              </ul>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Tables;