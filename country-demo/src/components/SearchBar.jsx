import { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSearch }) {
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  // Autofocus when component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChange(e) {
    const value = e.target.value;

    // Debounce logic
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      onSearch(value);
    }, 500);
  }

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <div style={{ position: "relative", display: "inline-block" }}>
        
        <FaSearch
          style={{
            position: "absolute",
            top: "50%",
            left: "12px",
            transform: "translateY(-50%)",
            color: "#555",
          }}
        />

        <input
          ref={inputRef}
          type="text"
          placeholder="Search country..."
          onChange={handleChange}
          style={{
            padding: "10px 10px 10px 35px",  // left padding for icon space
            width: "300px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
      </div>
    </div>
  );
}

export default SearchBar;