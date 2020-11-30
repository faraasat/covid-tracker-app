import ReactCountryFlag from "react-country-flag";

export default function CountryFlags({ name, style }) {
  return (
    <ReactCountryFlag
      className="emojiFlag"
      countryCode={name}
      svg
      style={style}
    />
  );
}
