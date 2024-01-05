import React, { useState, useEffect } from "react";
export const CountryCard = ({ countries }) => {
  //Link not working so no continuing with this exercise, completed the main logic
  const [country, setCountry] = useState(countries[0]);

  const noOfCountries = countries.length;

  const onButtonClick = () => {
    setCountry(countries[Math.floor(Math.random() * noOfCountries)]);
  };

  return (
    <div className="w-8/12 shadow-md">
      <div>
        <img src={country.flag} alt={country.name} />
      </div>
      <button onClick={onButtonClick}>Select Country</button>
    </div>
  );
};
