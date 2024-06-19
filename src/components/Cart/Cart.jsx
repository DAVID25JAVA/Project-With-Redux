import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCart } from "../../CartSlice/CartSlice";

function Cart() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(res.data); // Set products state to the array of products from API
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDispatch = (product) => {
    dispatch(addCart(product));
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 pt-24">
        {products.map((data) => (
          <div
            key={data.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg mb-4 dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              className="h-64 w-full rounded-t-lg"
              src={data.image}
              alt={data.title}
            />
            <div className="p-4">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data.title}
              </h5>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${data.price}
                </span>
                <button
                  onClick={() => handleDispatch(data)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
