const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white py-4 shadow-md">
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-extrabold tracking-wide">
                    MyBrand
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-6 text-lg font-semibold">
                    <a href="#" className="hover:text-blue-500 transition">Home</a>
                    <a href="#" className="hover:text-blue-500 transition">About</a>
                    <a href="#" className="hover:text-blue-500 transition">Services</a>
                    <a href="#" className="hover:text-blue-500 transition">Contact</a>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-bold transition">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button className="text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
