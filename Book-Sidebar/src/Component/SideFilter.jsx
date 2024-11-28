import React, { useState } from "react";

const SideFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRatings, setSelectedRatings] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedStock, setSelectedStock] = useState(false);

  const categories = ["Electronics", "Books", "Clothing", "Home Appliances"];
  const ratings = [5, 4, 3, 2, 1];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSearchTerm("");
    setSelectedRatings(null);
    setPriceRange([0, 100]);
    setSelectedStock(false);
  };

  return (
    <div className="w-64 bg-white border p-4 space-y-6">
      {/* Category Selection */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-lg border">
  <h3 className="font-semibold text-lg text-gray-700 mb-4">Categories</h3>
  <ul className="space-y-3">
    {categories.map((category) => (
      <li key={category}>
        <label className="flex items-center space-x-3 group cursor-pointer">
          {/* Radial Checkbox */}
          <div className="relative w-5 h-5">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer peer"
            />
            <div className="w-5 h-5 bg-white border-2 border-gray-300 rounded-full peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-transform duration-300 transform peer-checked:scale-110"></div>
          </div>
          <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200">
            {category}
          </span>
        </label>
      </li>
    ))}
  </ul>
</div>


      {/* Search Filter */}
      <div>
        <h3 className="font-semibold text-lg">Search</h3>
        <input
          type="text"
          placeholder="Search authors"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      {/* Ratings Filter */}
      <div>
        <h3 className="font-semibold text-lg">Ratings</h3>
        <ul className="space-y-2">
          {ratings.map((rating) => (
            <li key={rating}>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="ratings"
                  checked={selectedRatings === rating}
                  onChange={() => setSelectedRatings(rating)}
                  className="rounded border-gray-300"
                />
                <span>{rating} & Up</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-lg">Price Range</h3>
        <div className="flex space-x-2">
          <input
            type="number"
            min="0"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([+e.target.value, priceRange[1]])
            }
            className="w-16 px-2 py-1 border rounded"
          />
          <span>-</span>
          <input
            type="number"
            max="1000"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], +e.target.value])
            }
            className="w-16 px-2 py-1 border rounded"
          />
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="font-semibold text-lg">Availability</h3>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={selectedStock}
            onChange={() => setSelectedStock(!selectedStock)}
            className="rounded border-gray-300"
          />
          <span>In Stock</span>
        </label>
      </div>

      {/* Reset Filters */}
      <div>
        <button
          onClick={resetFilters}
          className="w-full bg-red-500 text-white py-2 rounded"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default SideFilter;
