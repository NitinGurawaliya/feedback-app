const Navbar = () => {
  return (
    <nav className="bg-white w-full border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3">
        
        <div className="flex items-center gap-2">
          
          <div className="h-16 w-16 rounded-full overflow-hidden bg-green-500 flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/dixjcb4on/image/upload/v1741629142/dishes_image/hillPoint_logo.png"
              className="h-full w-full object-cover"
              alt="Restaurant Logo"
            />
          </div>

          <div className="leading-tight">
            <p className="text-sm font-semibold text-gray-900">
              Hill Point
            </p>
            <p className="text-xs text-gray-500">
              Solan
            </p>
          </div>
        </div>

        <div className="text-xs text-gray-400">
          by Zayka
        </div>

      </div>
    </nav>
  );
};

export default Navbar;