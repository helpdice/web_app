import React from "react";
import { Link } from 'react-router-dom'

const SidebarLink = () => {
  return (
    <>
      <li className="block">
        <Link
          to={`/docs`}
          className={`flex w-full rounded-sm bg-stroke px-3 py-2 text-base text-black dark:bg-blackho dark:text-white`}
        >
          Introduction
        </Link>
        <Link
          to={`/docs`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Bootstrap Template Guide
        </Link>
        <Link
          to={`/docs`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Style Guide
        </Link>
        <Link
          to={`/docs`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Using Tailwind Components
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
