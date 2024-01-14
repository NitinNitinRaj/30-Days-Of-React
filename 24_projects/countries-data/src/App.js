import React, { useEffect, useRef, useState } from "react";
import { getCountriesData } from "./apis/country-api";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function App() {
  const [countries, setCountries] = useState([]);
  const jumpRef = useRef(null);
  const jumpRefTop = useRef(null);

  useEffect(() => {
    getCountriesData()
      .then((response) => setCountries(response.data))
      .catch((err) => setCountries([]));
  }, []);

  return (
    <div>
      <Header noOfCountries={countries.length} jumpRefTop={jumpRefTop} />
      <Body countries={countries} useRef={jumpRef} />
      <Footer setRef={jumpRef} jumpRefTop={jumpRefTop} />
    </div>
  );
}
