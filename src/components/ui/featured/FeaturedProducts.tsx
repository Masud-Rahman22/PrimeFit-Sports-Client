import { SetStateAction, useState } from "react";
import Rating from "react-rating";
import { IProduct } from "./FeaturedSection";
import { Link } from "react-router-dom";

interface FeaturedProductsProps {
  product: IProduct;
}

export default function FeaturedProducts({ product }: FeaturedProductsProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const RatingComponent: any = Rating;
  const {_id,name, description, category, brand, stock, rating, price, image } = product;
  const [userRating, setUserRating] = useState(rating);

  return (
    <div className="w-full max-w-md flex flex-col justify-center items-center space-y-6 rounded-lg bg-white p-6 dark:bg-[#0000]">
      {/* Image section */}
      <div className="relative group">
        <img
          width={400}
          height={300}
          className="h-[250px] w-full rounded-lg object-fill"
          src={image}
          alt="product"
        />
        <div className="absolute top-0 right-0 m-2 bg-gray-700 p-1.5 text-white text-xs rounded">
          {category}
        </div>

        {/* View Details Button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link to={`/products/${_id}`} className="px-4 py-2 bg-slate-800 text-white text-sm rounded-lg hover:bg-slate-900">
            View Details
          </Link>
        </div>
      </div>

      {/* Product details */}
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex justify-center space-x-4">
          <span className="text-xl font-medium">${price}</span>
          <span className="text-sm text-gray-600 dark:text-gray-400">Stock: {stock}</span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center justify-center space-x-2">
        <RatingComponent
          initialRating={userRating}
          onChange={(value: SetStateAction<number>) => setUserRating(value)}
          emptySymbol={
            <svg
              className="w-7 text-gray-400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 18l-6.68 4.04 1.89-7.22L2 9.28l7.34-.64L12 2l2.66 6.64 7.34.64-5.21 5.54 1.89 7.22L12 18z" />
            </svg>
          }
          fullSymbol={
            <svg
              className="w-7 text-yellow-400"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 18l-6.68 4.04 1.89-7.22L2 9.28l7.34-.64L12 2l2.66 6.64 7.34.64-5.21 5.54 1.89 7.22L12 18z" />
            </svg>
          }
        />
        <span className="text-gray-500 dark:text-gray-400">({rating})</span>
      </div>

      {/* Brand */}
      <div className="text-center text-sm text-gray-600 dark:text-gray-400">
        Brand: {brand}
      </div>
    </div>
  );
}
