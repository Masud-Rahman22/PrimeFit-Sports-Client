import { useState } from 'react';
import Rating from 'react-rating';
import { IProduct } from './featured/FeaturedSection';
interface FeaturedProductsProps {
  product: IProduct;
}

export default function ProductCard2({ product }: FeaturedProductsProps) {
  const { name, description, category, brand, stock, rating, price, image } = product;
  const [userRating, setUserRating] = useState(rating);
  return (
      <div className="w-full max-w-[340px] space-y-3 rounded-xl bg-white p-4 dark:bg-[#18181B]">
          <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
              
              <img width={400} height={400} className="rounded-lg bg-black/40 object-cover" src={image} alt="card navigate ui" />
          </div>
          <div className="space-y-2">
              <h3 className="text-sm md:text-base lg:text-3xl text-[#2b2b2b]">{name}</h3>
              <p className="text-xs font-semibold text-gray-400 md:text-sm">Waterproof Sport HD Monitor for MacBook</p>
              <p>$20</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-6 text-sm md:text-base">
              <button className="rounded-lg bg-[#49B2FF] px-4 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">View Details</button>
              <button className="rounded-lg bg-gray-400 px-4 py-2 font-semibold text-white duration-300 hover:scale-95 hover:bg-gray-600">Add to Cart</button>
          </div>
      </div>
      );
  }
  