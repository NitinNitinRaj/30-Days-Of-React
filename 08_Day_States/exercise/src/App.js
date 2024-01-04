import CountryCard from "./components/CountryCard";
import { countriesData } from "./data/countries";

export default function App() {
  return (
    <div>
      <CountryCard countries={countriesData} />
    </div>
  );
}
