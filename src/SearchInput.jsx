import { useState } from "react";

function SearchInput({ onSearch }) {
  const [query, setQuery] = useState("");
  const [touched, setTouched] = useState(false);

  const handleSearch = () => {
    setTouched(true);
    if (query.trim() === "") return;

    onSearch(query.trim());
  };

  return (
    <div className="search-container">
      <label htmlFor="Search">
        <div className="relative">
          <input
            placeholder="Search by question, theme or phrase..."
            type="text"
            id="Search"
            className={`mt-0.5 w-full rounded pe-10 shadow-sm sm:text-sm border ${
              touched && query.trim() === ""
                ? "border-red-400"
                : "border-gray-300"
            }`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
            <button
              type="button"
              aria-label="Submit"
              onClick={handleSearch}
              className="rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </span>
        </div>
      </label>

      {touched && query.trim() === "" && (
        <p className="search-subtext" style={{ color: "red", marginTop: "5px" }}>
          Please enter a question or theme.
        </p>
      )}

      <div className="search-subtext-container">
        <p className="search-subtext">Example:</p>
        <p className="search-subtext">
          <i>What does the Bible say about justice?</i>
        </p>
        <p className="search-subtext">
          <i>How should I treat my enemies?</i>
        </p>
      </div>
    </div>
  );
}

export default SearchInput;
