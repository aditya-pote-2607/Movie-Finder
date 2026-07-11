import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-5">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Movie Search</h2>

        <hr className="w-full border-gray-600" />

        <ul className="flex gap-6 text-2xl">
          <li>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition">
              <RiTwitterXLine />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
          </li>
        </ul>

        <p className="text-sm text-gray-400">
          &copy; 2026 Movie Search. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;