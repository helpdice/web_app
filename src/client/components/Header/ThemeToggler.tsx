import React from "react";
// import { useTheme } from "@helpdice/theme";
import { toggleDarkMode } from "../../utils/helpers";

const ThemeToggler = () => {
  // const theme = useTheme();
  return (
    <button
      aria-label="theme toggler"
      onClick={() => toggleDarkMode()}
      className="bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white lg:static"
    >
      <img
        src="/images/icon/icon-moon.svg"
        alt="logo"
        width={21}
        height={21}
        className="dark:hidden"
      />

      <img
        src="/images/icon/icon-sun.svg"
        alt="logo"
        width={22}
        height={22}
        className="hidden dark:block"
      />
    </button>
  );
};

export default ThemeToggler;
