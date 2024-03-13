import logo from '/favicon.png';

const Navbar = () => {
    return (
      <nav className="bg-sky-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
            <span className="text-white text-lg font-semibold">Bookshelf</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-sky-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-sky-300">
              About
            </a>
          </div>
        </div>
      </nav>
    );
  };
  
  
  export default Navbar;