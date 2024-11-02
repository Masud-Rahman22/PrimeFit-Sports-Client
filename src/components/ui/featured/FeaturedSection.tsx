import { useEffect } from "react";
import { useGetAllProductsQuery } from "../../../redux/features/products/ProductsApi";
import FeaturedProducts from "./FeaturedProducts";
import AOS from 'aos';
import 'aos/dist/aos.css'

export interface IProduct {
  _id?: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  stock: number;
  rating: number;
  price: number;
  image: string;
  createdAt?: string; 
  isDeleted?: boolean;
}

export const FeaturedSection = () => {
  useEffect(()=>{
    AOS.init({duration:500})
  },[])
  // Set polling interval to 30 seconds (30000 ms)
  const { data, error, isLoading } = useGetAllProductsQuery(undefined, {
    pollingInterval: 30000,
  });

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    let errorMessage;

    if ('status' in error) {
      errorMessage = `Error: ${error.status} - ${JSON.stringify(error.data)}`;
    } else if ('message' in error) {
      errorMessage = error.message;
    } else {
      errorMessage = 'Unknown error occurred';
    }

    return <p>{errorMessage}</p>;
  }

  // Sort products by createdAt in descending order
  const recentProducts = data?.data
    ?.filter((product: IProduct) => !product.isDeleted) // Filter out deleted products
    .sort((a: IProduct, b: IProduct) => 
      new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    )
    .slice(0, 4);

   

  return (
    <div className="mt-16" >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" data-aos="fade-right">
        {recentProducts?.map((product: IProduct) => (
          <FeaturedProducts key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
