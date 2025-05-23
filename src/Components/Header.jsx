function Header({ count, color }) {
    return (
      <div className="border-2 border-blue-500 m-5 p-4 flex flex-col sm:flex-row justify-between items-center gap-3 rounded-lg shadow-md">
        <h1 className="text-xl font-bold" style={{ color }}>
          REDUX Project
        </h1>
        <h2 className="text-lg">The count is - {count}</h2>
      </div>
    );
  }
  
  export default Header;
  