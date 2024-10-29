import React, { useState, useEffect } from "react";
import { useGetAllProductsQuery } from "../redux/features/products/ProductsApi";
import Rating from "react-rating";
import { useLocation } from "react-router-dom";

export interface IProduct {
  _id: string;
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

const AllPorducts: React.FC = () => {
  const { data, error, isLoading } = useGetAllProductsQuery(undefined,{
    pollingInterval: 30000
  });
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromQuery = queryParams.get("category");

  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryFromQuery || ""
  ); // Initialize with category from query
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [minRating, setMinRating] = useState<number>(0);

  useEffect(() => {
    if (data?.data) {
      setFilteredProducts(data.data);
      const products = data.data as IProduct[];
      const uniqueCategories: string[] = Array.from(
        new Set(products.map((product) => product.category))
      );
      const uniqueBrands: string[] = Array.from(
        new Set(products.map((product) => product.brand))
      );
      setCategories(uniqueCategories);
      setBrands(uniqueBrands);
    }
  }, [data]);

  useEffect(() => {
    const filtered =
      data?.data?.filter(
        (product: IProduct) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          product.price >= minPrice &&
          product.price <= maxPrice &&
          (selectedCategory ? product.category === selectedCategory : true) &&
          (selectedBrand ? product.brand === selectedBrand : true) &&
          product.rating >= minRating &&
          !product.isDeleted
      ) || [];

    filtered.sort((a: { price: number }, b: { price: number }) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

    setFilteredProducts(filtered);
  }, [
    data,
    searchTerm,
    sortOrder,
    selectedCategory,
    selectedBrand,
    minPrice,
    maxPrice,
    minRating,
  ]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedBrand("");
    setMinPrice(0);
    setMaxPrice(1000);
    setSortOrder("asc");
    setMinRating(0);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products.</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Available Products</h1>

      <div className="flex flex-col md:flex-row">
        {/* Filters and Search Bar */}
        <div className="md:w-1/4 mb-4 md:mb-0 mr-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
          />

          {/* Filters */}
          <div className="flex flex-col mb-4">
            <label className="font-semibold mb-1">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 mb-4"
            >
              <option value="">All</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold mb-1">Brand:</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 mb-4"
            >
              <option value="">All</option>
              {brands?.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
          {/* New Rating Filter */}
          <div className="flex flex-col mb-4">
            <label className="font-semibold mb-1">Minimum Rating:</label>
            <input
              type="number"
              min="0"
              max="5"
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="border border-gray-300 rounded-lg p-2"
            />
          </div>
          {/* Toggle Sort By Price Button */}
          <button
            onClick={toggleSortOrder}
            className="bg-blue-500 text-white rounded-lg p-2 mb-4 mr-5"
          >
            Sort by Price: {sortOrder === "asc" ? "Ascending" : "Descending"}
          </button>
          <button
            onClick={handleClearFilters}
            className="bg-red-500 text-white rounded-lg p-2"
          >
            Clear Filters
          </button>
        </div>

        {/* Products Grid */}
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product: IProduct) => (
              <div
                key={product._id}
                className="border border-gray-300 rounded-lg p-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-700">{product.description}</p>
                <p className="text-lg font-bold mt-2">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-gray-500">Brand: {product.brand}</p>
                <p className="text-gray-500">Category: {product.category}</p>
                <div className="flex items-center">
                  <Rating
                    initialRating={product?.rating}
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
                  <span className="ml-2 text-gray-500">({product.rating})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPorducts;
