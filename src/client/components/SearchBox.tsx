import React from "react";

function SearchBox({ path }: { path: string }) {
  // const router = useRouter();
  // const searchParams = useSearchParams();
  return (
    <div className="animate_top border-stroke shadow-solid-13 dark:border-strokedark dark:bg-blacksection mb-10 rounded-md border bg-white p-3.5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // const formData = new FormData(e.currentTarget);
          // const search = String(formData.get("search"));
          // const hasSearch = search?.length > 0;
          // const hasCategory = searchParams.has("category");
          // const hasEither = hasSearch || hasCategory;
          // const both = hasCategory && hasSearch;
          // const params = `${hasEither ? "?" : ""}${
          //   hasCategory ? `category=${searchParams.get("category")}` : ""
          // }${both ? `&` : ""}${hasSearch ? `search=${search}` : ""}`;
          // const url = `${path}${params}`;
          // router.push(url);
        }}
        method="POST"
      >
        <div className="relative">
          <input
            type="text"
            name="search"
            placeholder="Search Here..."
            className="border-stroke focus:border-primary dark:border-strokedark dark:focus:border-primary w-full rounded-lg border px-6 py-4 pr-15 focus:outline-none dark:bg-black dark:shadow-none"
          />

          <button
            className="pointer absolute top-0 right-0 p-5"
            aria-label="search-icon"
            type="submit"
          >
            <svg
              className="hover:fill-primary dark:hover:fill-primary fill-black transition-all duration-300 dark:fill-white"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
