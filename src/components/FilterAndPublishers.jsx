import { useState } from "react";

const publishers = [
  "دار السلام للطباعة والنشر",
  "دار الأندلس",
  "دار الفكر",
  "مكتبة دار القلم",
  "مكتبة جرير"
];

function FilterAndPublishers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPublishers, setSelectedPublishers] = useState([]);

  // Handle the change for selected publishers (checkboxes)
  const handlePublisherChange = (publisher) => {
    setSelectedPublishers((prevSelected) =>
      prevSelected.includes(publisher)
        ? prevSelected.filter((item) => item !== publisher)
        : [...prevSelected, publisher]
    );
  };

  // Filter publishers based on the search query
  const filteredPublishers = publishers
    .filter((publisher) => publisher.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      // Prioritize selected publishers at the top
      const aSelected = selectedPublishers.includes(a);
      const bSelected = selectedPublishers.includes(b);
      return bSelected - aSelected; // Move selected to the top
    });

  // Reset search and selected publishers
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedPublishers([]);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-lg border animate-fadeIn">
      {/* Search Bar Section */}
      <h3 className="font-semibold text-lg text-gray-700 mb-4">Publishers</h3>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search publishers"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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

      {/* Publishers List with Checkboxes */}
      <ul className="space-y-3 max-h-64 overflow-y-auto scroll-smooth">
        {filteredPublishers.map((publisher) => (
          <li key={publisher}>
            <label className="flex items-center space-x-3 group cursor-pointer">
              {/* Radial Checkbox */}
              <div className="relative w-6 h-6">
                <input
                  type="checkbox"
                  checked={selectedPublishers.includes(publisher)}
                  onChange={() => handlePublisherChange(publisher)}
                  className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer peer"
                />
                <div className="w-6 h-6 bg-gray-100 border-2 border-gray-300 rounded-full peer-hover:border-blue-400 peer-checked:bg-blue-500 peer-checked:border-blue-500 relative transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full transform scale-0 peer-checked:scale-100 transition-transform duration-300"></div>
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-transparent peer-checked:border-white transition-all duration-300"></div>
                </div>
              </div>
              <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200">
                {publisher}
              </span>
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={() => resetFilters()}
        className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-all duration-200"
      >
        Reset Sort
      </button>
    </div>
  );
}

export default FilterAndPublishers;
