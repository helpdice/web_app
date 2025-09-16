import React from "react";
// import { AuthContext } from "@/providers/AuthProvider";
import type { Product } from "../../types/products";
// import { getUrl } from "../../utils/routes";
import { useCart } from "@helpdice/pro";
// import { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Auth } from "@helpdice/sdk";

function ProductItem({ product }: { product: Product }) {
  const navigate = useNavigate();
  const authenticated = Auth.isAuthenticated();
  const { addItem, items } = useCart();
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{product.name}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-3xl font-extrabold">₹ {product.rate}</span>
        <span className="text-gray-500 dark:text-gray-400">/ project</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {product.features.map((feature, index) => (
          <li key={`feature-${product._id}-${index}`} className="flex items-center space-x-3">
            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => {
        if (authenticated)  {
          addItem(
            {
              id: product._id,
              name: product.name,
              price: Number(product.rate),
            },
            1,
          );
          toast.info('Item Added to Cart!')
        } else {
          navigate('login')
        }
      }} className="text-gray-50 cursor-pointer bg-gray-600 hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white">Add to Cart</button>
    </div>
  )
}

export default ProductItem;