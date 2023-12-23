import Tables from "./Tables";

const Sidebar = () => {

  const queryValue = [
    {
      query: "select * from customers;",
      default: 1,
    },
    {
      query: "select * from products;",
      default: 2,
    },
    {
      query: "select * from suppliers;",
      default: 3,
    },
  ];


  return (
    <div className="sidebar flex flex-col">
        <div className="query">
            <h2 className="font-semibold text-center bg-gray-100 h-8">Predefined Query</h2>
            {queryValue.map((item, index) => (
            <ul><li
              key={index}
              className="cursor-pointer bg-gray-300 hover:bg-gray-400 hover:text-white p-2 text-center text-m rounded-sm my-4"
            >
              {item.query}
            </li></ul>
          ))}
        </div>
        <hr></hr>
        <div className="tables ">
            <h2 className="font-semibold text-center bg-gray-100 h-8">Available Tables</h2>
            <Tables></Tables>
        </div>
    </div>
  )
}

export default Sidebar
