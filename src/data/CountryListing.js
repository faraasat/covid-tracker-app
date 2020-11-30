import countryList from "react-select-country-list";

export default function CountryListing() {
  const countries = countryList().getData();
  return countries;
}
