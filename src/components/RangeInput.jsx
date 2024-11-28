import { useState, useRef } from "react";

function PriceRange({ range, setRange, min, max }) {
  const [isDragging, setIsDragging] = useState(null);
  const rangeBarRef = useRef(null);

  const formatCurrency = (value) => {
    return `৳${value.toLocaleString()}`;
  };

  const handleInputChange = (index, value) => {
    // Ensure that the values stay within bounds and update the range
    const numericValue = Math.max(min, Math.min(max, +value));
    if (index === 0) {
      setRange([Math.min(numericValue, range[1]), range[1]]);
    } else {
      setRange([range[0], Math.max(numericValue, range[0])]);
    }
  };

  const handleDragStart = (e, index) => {
    setIsDragging(index);
    e.preventDefault();
  };

  const handleDragEnd = () => {
    setIsDragging(null);
  };

  const handleDrag = (e) => {
    if (isDragging !== null && rangeBarRef.current) {
      const rect = rangeBarRef.current.getBoundingClientRect();
      const newValue = Math.min(
        Math.max(min, ((e.clientX - rect.left) / rect.width) * (max - min)),
        max
      );
      if (isDragging === 0) {
        setRange([Math.min(newValue, range[1]), range[1]]);
      } else {
        setRange([range[0], Math.max(newValue, range[0])]);
      }
    }
  };

  return (
    <div className="border rounded-lg shadow-lg bg-white w-full max-w-md p-6 mx-auto">
      <h3 className="font-semibold text-lg text-gray-700 mb-4">Price Range</h3>

      {/* Price Input Section */}
      <div className="flex items-center justify-between mb-6 space-x-4">
        <input
          type="number"
          min={min}
          max={max}
          value={range[0]}
          onChange={(e) => handleInputChange(0, e.target.value)}
          className="w-full max-w-[150px] px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
        />
        <span className="font-semibold text-gray-500">-</span>
        <input
          type="number"
          min={min}
          max={max}
          value={range[1]}
          onChange={(e) => handleInputChange(1, e.target.value)}
          className="w-full max-w-[150px] px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
        />
      </div>

      {/* Display formatted prices */}
      <div className="flex justify-between mb-4 text-sm text-gray-500">
        <span>{formatCurrency(range[0])}</span>
        <span>{formatCurrency(range[1])}</span>
      </div>

      {/* Range Bar with Scale */}
      <div
        ref={rangeBarRef}
        className="relative mt-4 h-2 bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 rounded-full cursor-pointer"
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchMove={handleDrag}
        onTouchEnd={handleDragEnd}
        onTouchCancel={handleDragEnd}
      >
        <div
          className="absolute h-2 bg-blue-500 rounded-full transition-all"
          style={{
            left: `${((range[0] - min) / (max - min)) * 100}%`,
            right: `${100 - ((range[1] - min) / (max - min)) * 100}%`,
          }}
        ></div>
        {/* Left Circle */}
        <div
          className="absolute h-6 w-6 bg-blue-500 rounded-full transform -translate-y-1/2 top-1/2 cursor-pointer"
          style={{
            left: `${((range[0] - min) / (max - min)) * 100}%`,
            transform: "translateX(-50%)",
          }}
          onMouseDown={(e) => handleDragStart(e, 0)}
          onTouchStart={(e) => handleDragStart(e, 0)}
        ></div>
        {/* Right Circle */}
        <div
          className="absolute h-6 w-6 bg-blue-500 rounded-full transform -translate-y-1/2 top-1/2 cursor-pointer"
          style={{
            left: `${((range[1] - min) / (max - min)) * 100}%`,
            transform: "translateX(-50%)",
          }}
          onMouseDown={(e) => handleDragStart(e, 1)}
          onTouchStart={(e) => handleDragStart(e, 1)}
        ></div>
      </div>

      {/* Scale Markers */}
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>{formatCurrency(min)}</span>
        <span>{formatCurrency(max / 2)}</span>
        <span>{formatCurrency(max)}</span>
      </div>
    </div>
  );
}

function App() {
  const [priceRange, setPriceRange] = useState([1000, 40000]);

  return (
    <div className="flex justify-center items-center bg-gray-50">
      <PriceRange
        range={priceRange}
        setRange={setPriceRange}
        min={0}
        max={60000} // Updated maximum value to 60,000 Taka
      />
    </div>
  );
}

export default App;
