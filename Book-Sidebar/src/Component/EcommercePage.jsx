import React from 'react';
import SideFilter from './SideFilter';

const EcommercePage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SideFilter />

      {/* Main Content */}
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Products</h1>
        {/* Product grid or content */}
      </main>
    </div>
  );
};

export default EcommercePage;
