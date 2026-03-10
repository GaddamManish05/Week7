function CountryCard({ country }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={country.flags.png}
        alt={country.name.common}
        style={{ width: "100px", height: "60px", objectFit: "cover",margin : "auto" }}
      />

      <h3>{country.name.common}</h3>
      <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
    </div>
  );
}

export default CountryCard;