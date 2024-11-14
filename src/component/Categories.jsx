import React, { useState } from "react";
import CategoryItem from "./CategoryItem";

const Categories = ({ title, open, setOpen }) => {
  const isOpen = () => {
    setOpen();
  };
  return (
    <div>
      <div className="flex justify-between gap-3 mx-4 my-1 w-full">
        <h1 className="text-grey-600">{title}</h1>
        <button
          onClick={isOpen}
          className="text-md font-bold text-gray-600 border border-gray-400"
        >
          show
        </button>
       
      </div>
      <div className="flex flex-col mx-2 my-1">{open && <CategoryItem />}</div>
    </div>
  );
};

export default Categories;
