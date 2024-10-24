import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { useGetAllProductsQuery } from "../../../redux/features/products/ProductsApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type TProduct = {
  name: string;
  description: string;
  category: string;
  brand: string;
  stock: number;
  rating: number;
  price: number;
  image: string;
  isDeleted: boolean;
};

const Categories: React.FC = () => {
  const { data: products, isLoading, error } = useGetAllProductsQuery();
  const productData: TProduct[] = products?.data || [];
  const navigate = useNavigate(); // Initialize navigate

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories.</div>;

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Handle category click to redirect
  const handleCategoryClick = (category: string) => {
    console.log(category)
    navigate(`/products?category=${category}`);
  };

  return (
    <div className="category-section lg:my-24">
      <h2 className="text-center text-2xl font-bold mb-4">Categories</h2>
      <Slider {...settings}>
        {productData?.map((product: TProduct, idx: number) => (
          <div key={idx} className="p-4" onClick={() => handleCategoryClick(product.category)}>
            <div
              className="category-item text-center relative bg-gray-100 p-6 rounded-lg shadow-lg cursor-pointer"
              style={{
                backgroundImage: `url(${product?.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
              }}
            >
              <div
                className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm"
                style={{
                  filter: 'blur(2px)',
                }}
              />
              <div className="relative z-10 text-custom-dark bg-gray-50 flex items-center justify-center mt-16 mx-16 rounded-full">
                <h3 className="text-lg font-semibold">{product?.category}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
