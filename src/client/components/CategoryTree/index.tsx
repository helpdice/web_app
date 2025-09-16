import { Link } from 'react-router-dom'
import React, { useState } from "react";
import { Category } from '../../types/category';

const CategoryTree = ({ data, path }: { data: Category[], path: string }) => {
  const [openSubItems, setOpenSubItems] = useState<{ [key: string]: boolean }>({});

  const toggleSubItem = (id: string) => {
    setOpenSubItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderCategory = (category: Category) => {
    return (
      <li key={category._id} className="py-2 px-2 hover:bg-blue-50 hover:text-gray-800 rounded-lg transition duration-300">
        <div className="flex items-center justify-between space-x-2">
          <Link to={path.replace(':category', category.slug)}><span className="text-base font-bold">{category.name}</span></Link>
          {category.children?.length > 0 && (
            <svg
              onClick={() => toggleSubItem(category._id)}
              className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-all duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          )}
        </div>

        {category.children?.length > 0 && openSubItems[category._id] && (
          <ul className="divide-y divide-gray-300 bg-gray-50 space-y-2 rounded-md px-2 py-2 mt-4 dark:bg-gray-900 dark:text-gray-200">
            {category.children.map((subCategory) => renderCategory(subCategory))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <ul className="divide-y divide-gray-300 max-w-lg mt-4 mx-auto space-y-2 rounded-lg">
      {data.map((category) => renderCategory(category))}
    </ul>
  );
};

export default CategoryTree;
