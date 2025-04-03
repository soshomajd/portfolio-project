import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#F7EFD8] font-[Kiona-Regular] text-2xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bolder">
            Wilma Håkansson
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-gray-600">
              Home
            </Link>
            <Link to="/projects" className="hover:text-gray-600">
              Projects
            </Link>
            <Link to="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
