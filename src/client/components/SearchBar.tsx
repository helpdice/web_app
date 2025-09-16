import React, { useEffect } from "react";
import { Category } from "../types/category";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

type SearchBarProps = {
  placeholder?: string;
  categories: Category[];
};

function SearchBar({
  placeholder = "Search...",
  categories = [],
}: SearchBarProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const e: HTMLInputElement = document.getElementById(
      "search-dropdown",
    ) as HTMLInputElement;
    if (e && searchParams.has("search")) {
      e.value = String(searchParams.get("search"));
    }
  });
  return (
    <form
      className="mx-auto max-w-lg"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const search = String(formData.get("search"));
        const hasSearch = search?.length > 0;
        searchParams.set('search', search);
        setSearchParams(searchParams);
        // const hasCategory = searchParams.has("category");
        // const hasEither = hasSearch || hasCategory;
        // const both = hasCategory && hasSearch;
        // const params = `${hasEither ? "?" : ""}${
        //   hasCategory ? `category=${searchParams.get("category")}` : ""
        // }${both ? `&` : ""}${hasSearch ? `search=${search}` : ""}`;
        // const url = `${pathname}${params}`;
        // // console.log(url);
        // window.location.href = url;
      }}
    >
      <div className="flex">
        {/* <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label> */}
        {categories?.length > 0 && (
          <>
            <button
              type="button"
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="z-10 inline-flex flex-shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              {/* {categories.find(
                (cate) => cate.slug === searchParams.get("category"),
              )?.name ?? "All Categories"} */}
              <svg
                className="ms-2.5 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden w-55 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    // onClick={() => router.push(pathname, { scroll: false })}
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    All Categories
                  </button>
                </li>
                {categories.map((category: any) => (
                  <li key={`${category.slug}-${category._id}`}>
                    <button
                      onClick={() => {
                        navigate(pathname + "?" + `category=${category.slug}`)
                      }}
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {category.name?.length > 25
                        ? category.name?.slice(0, 22) + "..."
                        : category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        <div className="relative w-full">
          <input
            type="search"
            name="search"
            id="search-dropdown"
            className={`z-20 block w-full bg-gray-50 p-2.5 text-sm text-gray-900 ${categories?.length > 0 ? "rounded-e-lg border-s-gray-50" : "rounded-lg"} border border-s-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-s-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500`}
            placeholder={placeholder}
          />
          <button
            type="submit"
            className="pointer absolute end-0 top-0 h-full rounded-e-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
