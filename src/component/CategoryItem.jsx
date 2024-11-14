import React from "react";

const CategoryItem = () => {
  const items = ["Hello World", "Hello World", "Hello World", "Hello World", "Hello World"];
  return (
    <div>
      <div className="text-gray-600 text-sm font-bold mb-2 mx-6 my-1">
        {items.map((item, index) => (
          <button className="text-gray-600" key={index}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryItem;
