import React, { useEffect, useState } from "react";
import axios from "axios";

const CountryDropdown = ({ register }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const sorted = response.data
          .map((country) => country.name.common)
          .sort((a, b) => a.localeCompare(b));
        setCountries(sorted);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  return (
    <div>
      <label>Country</label>
      <select {...register("country", { required: true })}>
        <option value="">Select a country</option>
        {countries.map((name) => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>
    </div>
  );
};

export default CountryDropdown;
