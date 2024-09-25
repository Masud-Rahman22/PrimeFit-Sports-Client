import { useGetAllProductsQuery } from "../../../redux/features/products/ProductsApi";
import FeaturedProducts from "../FeaturedProducts";

export interface IProduct {
  name: string;
  description: string;
  category: string;
  brand: string;
  stock: number;
  rating: number;
  price: number;
  image: string;
  isDeleted: boolean;
}
export const FeaturedSection = () => {
  const { data, error, isLoading } = useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    let errorMessage;
  
    if ('status' in error) {
      errorMessage = `Error: ${error.status} - ${JSON.stringify(error.data)}`;
    }
    
    else if ('message' in error) {
      errorMessage = error.message;
    } else {
      errorMessage = 'Unknown error occurred';
    }
  
    return <p>{errorMessage}</p>;
  }

  return (
    <div>
      <h2>All Products</h2>
    <div className="grid grid-cols-4 gap-5">
    {data?.data?.slice(0,4).map((product:IProduct,idx:number) => (
          <FeaturedProducts key={idx} product={product}></FeaturedProducts>
        ))}
    </div>
    </div>
  );
};
//   {/* Rating using react-rating */}
//   <div className="flex items-center space-x-2">
//   <Rating
//     initialRating={userRating}
//     onChange={(value) => setUserRating(value)}
//     emptySymbol={<svg className="w-7 text-gray-400" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 18l-6.68 4.04 1.89-7.22L2 9.28l7.34-.64L12 2l2.66 6.64 7.34.64-5.21 5.54 1.89 7.22L12 18z"/></svg>}
//     fullSymbol={<svg className="w-7 text-yellow-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 18l-6.68 4.04 1.89-7.22L2 9.28l7.34-.64L12 2l2.66 6.64 7.34.64-5.21 5.54 1.89 7.22L12 18z"/></svg>}
//   />
//   <span className="text-gray-500 dark:text-white/60">({rating})</span>
// </div>