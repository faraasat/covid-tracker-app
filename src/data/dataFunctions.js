import { toast } from "react-toastify";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country = "") => {
  try {
    const response = await fetch(url + country);
    if (response.status === "404" || !response.ok) {
      throw Error;
    }
    const data = await response.json();
    return data;
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
