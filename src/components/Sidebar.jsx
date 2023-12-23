const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col">
        <div className="query">
            <h2 className="font-semibold text-center bg-gray-100 h-8">Predefined Query</h2>
        </div>
        <hr></hr>
        <div className="tables">
            <h2 className="font-semibold text-center bg-gray-100 h-8">Available Tables</h2>
        </div>
    </div>
  )
}

export default Sidebar
