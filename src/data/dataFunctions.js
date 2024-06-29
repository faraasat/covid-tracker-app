import { toast } from "react-toastify";

// const url = "https://covid19.mathdro.id/api";
const url = "https://covid-api.com/api/reports/total";
const url2 = "https://api.covid19api.com/total/dayone";
let fUrl = "";

export const fetchData = async (data) => {
  if (
    typeof data == "undefined" ||
    data === null ||
    ((data.iso2 === null || "") && (data.fullUrl === null || ""))
  ) {
    fUrl = url;
  } else {
    fUrl = url + `/countries/${data?.iso2}`;
  }
  try {
    const response = await fetch(fUrl);
    if (response.status === "404" || !response.ok) {
      throw Error;
    }
    const data = await response.json();
    // console.log(fUrl, data);
    return data?.data;
  } catch (error) {
    toast.error("Data for this Country is not found in our database", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 5000,
    });
    toast.clearWaitingQueue();
    return;
  }
};

export const fetchDailyData = async (data) => {
  if (
    typeof data == "undefined" ||
    data === null ||
    ((data.iso2 === null || "") && (data.fullUrl === null || ""))
  ) {
    fUrl = "https://api.covid19api.com/world";
    data = "None";
  } else {
    fUrl = url2 + `/country/${data?.iso2}`;
  }
  try {
    const d =await fetch("https://covid-api.com/api/reports/total")
    // console.log(await d.json());
    const response = await fetch(fUrl);
    if (response.status === "404" || !response.ok) {
      throw Error;
    }
    const resData = (await response.json()) || [];
    // console.log(fUrl, data);
    return { resData, data };
  } catch (error) {
    toast.error("Data for this Country is not found in our database", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 5000,
    });
    toast.clearWaitingQueue();
    return;
  }
};

// export async function GetLocation(setLoc) {
//   // const response = await fetch("https://json.geoiplookup.io");
//   // const response = await fetch("https://iplist.cc/", {
//   //   method: "GET",
//   //   credentials: "same-origin",
//   //   header: "Access-Control-Allow-Origin",
//   //   mode: "cors",
//   // });
//   // const response = await fetch("https://iplist.cc/apidoc");
//   // const response = await fetch("https://ipapi.co/json/");
//   // const response = await fetch("http://api.hostip.info");
//   const response = await fetch("https://extreme-ip-lookup.com/json/");
// }
