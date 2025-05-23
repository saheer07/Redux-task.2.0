function Footer({ color, count }) {
    return (
      <div className="border-2 border-blue-500 m-5 p-4 text-center rounded-lg shadow-md">
        <h2 className="text-lg font-semibold" style={{ color }}>
          My Redux project footer
        </h2>
        <h3>The count is - {count}</h3>
      </div>
    );
  }
  
  export default Footer;
  