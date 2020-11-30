import { useContext } from "react";
import { DataContext } from "./dataContext";

export default function CreateResource(fetchData) {
  let status = "loading";
  let result;
  let url;
  let { data } = useContext(DataContext);
  if (typeof data != "undefined") {
    url = `/countries/${data.iso2}`;
  }

  let suspender = fetchData(url);

  suspender
    .then((data) => {
      status = "success";
      result = {
        confirmed: data?.confirmed?.value,
        recovered: data?.recovered?.value,
        deaths: data?.deaths?.value,
        lastUpdate: data?.lastUpdate,
      };
    })
    .catch((error) => {
      status = "error";
      result = error;
    });

  return {
    readData() {
      if (status === "loading") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}
