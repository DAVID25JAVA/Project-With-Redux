import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../CartSlice/CartSlice";

function AddToCart() {
  const AddToCart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (ItemId) => {
    console.log(ItemId);
    dispatch(removeCart(ItemId));
  };

  return (
    <>
      <p className="text-center pt-20 font-semibold shadow-lg text-2xl text-gray-400 font-serif">
        Welcome to Add to Cart
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 pt-12">
        {AddToCart.map((data) => (
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
                  onClick={() => handleRemove(data.id)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AddToCart;
