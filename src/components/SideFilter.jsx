import React, { useState } from "react";
import FilterAndAuthors from "./FilterAndAuthors";
import FilterAndPublishers from "./FilterAndPublishers";
import RangeInput from "./RangeInput";

const SideFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRatings, setSelectedRatings] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedStock, setSelectedStock] = useState(false);

  // category------Start-------//
  const categories = [
    "ইসলামি বই",
    "কুরআন ও তাফসীর",
    "হাদিস ও সুন্নাত",
    "কুরআন বিষয়ক আলোচনা",
    "হাদিস বিষয়ক আলোচনা",
    "সীরাতে রাসূল ﷺ",
    "নবি-রাসুল, সাহাবা, তাবেই ও অলি-আওলিয়া",
    "সালাত/নামায",
    "রোযা/সিয়াম",
    "হজ্জ-উমরাহ ও কুরবানি",
    "যাকাত",
    "ইসলামি অঞ্চল, শাসনব্যবস্থা ও রাজনীতি",
    "আরবি ও উর্দু",
    "মৃত্যু, পরকাল ও জান্নাত-জাহান্নাম",
    "আরবি শিক্ষা",
    "ইসলামি আইন, ফতোয়া ও ফিকহ শাস্ত্র",
    "ইসলামি অর্থনীতি ও ব্যবসা বাণিজ্য",
    "ইসলামি দর্শন",
    "ইসলামি আমল ও আমলের সহায়িকা",
    "ইসলামি বিধি-বিধান ও মাসআলা-মাসায়েল",
    "ইসলাম প্রসঙ্গ",
    "দাওয়াত, তাবলীগ, বক্তৃতা, আলোচনা ও ওয়াজ",
    "ব্যক্তিগত ও পারিবারিক জীবনবিধান",
    "ইসলামি আদর্শ ও মতবাদ",
    "আধ্যাত্মিকতা ও সুফিবাদ",
    "ইসলামি ইতিহাস ও ঐতিহ্য",
    "ইসলামি ইংরেজি বই",
    "শিশু-কিশোর ইসলামি বই",
    "ইসলামি সাহিত্য",
    "ইসলামি ও সীরাত বিশ্বকোষ",
    "ইসলামিক স্টাডিজ (টেক্সটবুক)",
    "মুসলিম ব্যক্তিত্ব",
    "দোয়া, দরূদ ও যিকর",
    "ইসলামের বিশেষ দিন ও ঘটনাবলি",
    "ইসলামি বিবিধ বই",
    "ইসলামি সওয়াল-জওয়াব",
    "ঈমান, আক্বিদা ও তাওবাহ",
    "ইসলামে নারী",
    "ইসলামি গবেষণা, সমালোচনা ও প্রবন্ধ",
    "ইসলামি অনুবাদ বই",
    "ইসলাম ও সমকালীন বিশ্ব",
    "ইসলাম ও বাংলাদেশ",
    "ইসলামি স্থাপত্য ও সংস্কৃতি",
    "ইসলাম ও বিজ্ঞান",
    "ইসলামি বই: আত্ম-উন্নয়ন",
    "ইসলামি চিকিৎসা ও স্বাস্থ্যবিধি"
  ];
  const [searchQuery, setSearchQuery] = useState('');
  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  filteredCategories.sort((a, b) => {
    const aSelected = selectedCategories.includes(a);
    const bSelected = selectedCategories.includes(b);
    return bSelected - aSelected; // Move selected items to the top
  });
  // category------End-------//


  // Short------Start-------//
  const [selectedSort, setSelectedSort] = useState("");
  // Short------End-------//


  const ratings = [5, 4, 3, 2, 1];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]); // Clear selected categories
    setSearchQuery(""); // Clear category search
    setSelectedRatings(null); // Clear selected ratings
    setPriceRange([0, 100]); // Reset price range to default
    setSelectedSort(""); // Clear sorting
    setSelectedStock(false); // Reset stock availability
  };





  return (
    <div className="w-64 bg-white border p-4 space-y-6">

      {/* Category Selection */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-lg border animate-fadeIn">
        <h3 className="font-semibold text-lg text-gray-700 mb-4">Shop by Categories</h3>

        {/* Search Bar */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-2.5 right-3 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16l-4-4m0 0l4-4m-4 4h16"
            />
          </svg>
        </div>

        {/* Scrollable Category List */}
        <ul className="space-y-3 max-h-64 overflow-y-auto scroll-smooth">
          {filteredCategories
            .sort((a, b) => {
              const aSelected = selectedCategories.includes(a);
              const bSelected = selectedCategories.includes(b);
              return bSelected - aSelected; // Move selected categories to the top
            })
            .map((category) => (
              <li key={category}>
                <label className="flex items-center space-x-3 group cursor-pointer">
                  {/* Radial Checkbox with Double Circle and Stroke */}
                  <div className="relative w-6 h-6">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer peer"
                    />
                    <div className="w-6 h-6 bg-gray-100 border-2 border-gray-300 rounded-full peer-hover:border-blue-400 peer-checked:bg-blue-500 peer-checked:border-blue-500 relative transition-all duration-300">
                      {/* Inner Circle */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full transform scale-0 peer-checked:scale-100 transition-transform duration-300"></div>
                      </div>
                      {/* Outer Ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-transparent peer-checked:border-white transition-all duration-300"></div>
                    </div>
                  </div>
                  <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200">
                    {category}
                  </span>
                </label>
              </li>
            ))}
        </ul>
      </div>



      {/* // Short------Start-------// */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-lg border animate-fadeIn">
        <h3 className="font-semibold text-lg text-gray-700 mb-4">Sort Options</h3>

        {/* Sort Options List */}
        <ul className="space-y-3">
          {[
            "Best Seller",
            "New Released",
            "Price - Low to High",
            "Price - High to Low",
            "Discount - Low to High",
            "Discount - High to Low",
          ].map((sortOption) => (
            <li key={sortOption}>
              <label className="flex items-center space-x-3 group cursor-pointer">
                {/* Radial Checkbox */}
                <div className="relative w-6 h-6">
                  <input
                    type="radio"
                    name="sortOption"
                    value={sortOption}
                    checked={selectedSort === sortOption}
                    onChange={() => setSelectedSort(sortOption)}
                    className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer peer"
                  />
                  <div className="w-6 h-6 bg-gray-100 border-2 border-gray-300 rounded-full peer-hover:border-blue-400 peer-checked:bg-blue-500 peer-checked:border-blue-500 relative transition-all duration-300">
                    {/* Inner Circle */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full transform scale-0 peer-checked:scale-100 transition-transform duration-300"></div>
                    </div>
                  </div>
                </div>
                <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200">
                  {sortOption}
                </span>
              </label>
            </li>
          ))}
        </ul>

        {/* Reset Button */}
        <button
          onClick={() => setSelectedSort("")}
          className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-all duration-200"
        >
          Reset Sort
        </button>
      </div>
      {/* // Short------End-------// */}



      {/* // authors------Start-------// */}

      <FilterAndAuthors></FilterAndAuthors>

      {/* // authors------End-------// */}



      {/* // Publishers------Start-------// */}

      <FilterAndPublishers></FilterAndPublishers>

      {/* // Publishers------End-------// */}


      {/* Price Range */}
      <RangeInput></RangeInput>


      {/* Ratings Filter */}
      <div className="p-4 bg-white shadow rounded-lg">
        <h3 className="font-semibold text-lg text-gray-800 mb-4">Ratings</h3>
        <ul className="space-y-3">
          {ratings.map((rating) => (
            <li key={rating} className="flex items-center">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="ratings"
                  checked={selectedRatings === rating}
                  onChange={() => setSelectedRatings(rating)}
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                />
                <span className="flex items-center text-gray-700">
                  {/* Render Stars */}
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={i < rating ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`w-6 h-6 ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      />
                    </svg>
                  ))}
                  &nbsp; <span className="text-sm font-medium">{rating} & Up</span>
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>


      {/* Reset Filters */}
      <div>
        <button
          onClick={resetFilters}
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-all duration-200"
        >
          Reset All Filters
        </button>
      </div>
    </div>
  );
};

export default SideFilter;
