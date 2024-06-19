import { SiRedux } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa"; // Added FaPlus for the "Add to Cart" icon
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartCount = useSelector((state) => state.cart);

  return (
    <nav className="border-gray-200 fixed w-full bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <SiRedux className="text-4xl text-purple-600" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Redux Toolkit
          </span>
        </NavLink>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col gap-3 font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 md:p-0 text-white bg-purple-600 rounded md:bg-transparent md:text-purple-600 md:dark:text-purple-600 dark:bg-purple-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AddToCart"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-600 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Cart
              </NavLink>
            </li>

            <li>
              <div className="flex items-center">
                <FaShoppingCart className="text-3xl mr-1  text-white" />
                <span className="text-gray-900 dark:text-white"> : {cartCount.length}</span>
              </div>
            </li>

            </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar