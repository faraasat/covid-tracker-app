import React, { useContext } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CountryFlags from "../data/CountryFlags";
import CountryListing from "../data/CountryListing";
import { InputLabel } from "@material-ui/core";
import { DataContext } from "../data/dataContext";

export default function CountryFlag() {
  const [age, setAge] = React.useState("");
  const { manageCountryData } = useContext(DataContext);
  function handleChange(event) {
    if (age !== event.target.value) {
      setAge(event.target.value);
      let iso = event.target.value.split(",")[1];
      let fullurl = event.target.value.split(",")[0];
      manageCountryData({ iso2: iso, fullUrl: fullurl });
    }
  }
  const countries = CountryListing();

  return (
    <div>
      <FormControl variant="filled">
        <InputLabel htmlFor="country-label">Select Country</InputLabel>
        <Select value={age} style={{ minWidth: 250 }} onChange={handleChange}>
          {countries.map(({ value, label }, index) => {
            return (
              <MenuItem key={index} value={label + "," + value}>
                <CountryFlags
                  name={value}
                  style={{ width: 60, marginBottom: 1 }}
                />
                {label} - {value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
