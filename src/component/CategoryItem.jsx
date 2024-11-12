import React from "react";

const CategoryItem = () => {
  const items = ["Hello World", "Hello World", "Hello World", "Hello World", "Hello World"];
  return (
    <div>
      <div className="text-gray-600">
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
