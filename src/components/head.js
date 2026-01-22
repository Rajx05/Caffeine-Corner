function Head() {
  return (
    <div className="navbar m-3 sticky top-1">
      <nav className="bg-amber-900 p-4 shadow-lg rounded-full">
        <div className="flex justify-between items-center max-w-7xl mx-auto ">
          <h1 className="text-white text-2xl font-bold">Coffee Cafe</h1>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="text-white hover:text-blue-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-200">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-200">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Head;
