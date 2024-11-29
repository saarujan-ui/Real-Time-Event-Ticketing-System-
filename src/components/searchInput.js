import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  // Function to handle search action
  const handleSearch = () => {
    alert(`You searched for: ${query}`);
  };

  return (
    <div
      style={{
        backgroundColor:'white',
        display: "flex",
        alignItems: "center",
        border: "1px solid #ddd",
        borderRadius: "5px",
        overflow: "hidden",
        maxWidth: "400px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Search Icon */}
      <div
        style={{
          padding: "10px",
          backgroundColor: "#f8f9fa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaSearch style={{ color: "#007BFF",padding:5 }} />
      </div>

      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search here..."
        style={{
          border: "none",
          outline: "none",
          flex: 1,
          padding: "14px",
          fontSize: "16px",
        }}
      />

      {/* Search Button */}
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "5px",
          textAlign: "center",
          margin:5
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
