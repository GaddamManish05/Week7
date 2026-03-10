import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all countries on page load
  useEffect(() => {
    fetchCountries();
  }, []);

  async function fetchCountries() {
    try {
      setLoading(true);
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
      );

      if (!res.ok) {
        throw new Error("Failed to fetch countries");
      }

      const data = await res.json();
      setCountries(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Search handler
  function handleSearch(value) {
    setQuery(value.toLowerCase());
  }

  // Filter countries locally
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query)
  );

  return (
    <div style={{ padding: "20px",textAlign : "center" }}>
      <h1 style={{ textAlign: "center",marginBottom:"20px" }}>Country Explorer</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

      {!loading && !error && (
        <CountryList countries={filteredCountries} />
      )}
    </div>
  );
}

export default App;