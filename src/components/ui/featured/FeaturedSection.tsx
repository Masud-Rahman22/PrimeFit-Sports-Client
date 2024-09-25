import { useGetAllProductsQuery } from "../../../redux/features/products/ProductsApi";
import FeaturedProducts from "./FeaturedProducts";

export interface IProduct {
  _id: string,
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
    <div >
      <h2 className="">All Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
    {data?.data?.slice(0,4).map((product:IProduct,idx:number) => (
          <FeaturedProducts key={idx} product={product}></FeaturedProducts>
        ))}
    </div>
    </div>
  );
};
