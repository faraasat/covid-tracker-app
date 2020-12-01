import { useContext } from "react";
import { toast } from "react-toastify";
import { DataContext } from "./dataContext";

export default function CreateResource(fetchData) {
  let status = "loading";
  let result;
  let prevState;
  let { data } = useContext(DataContext);

  let suspender = fetchData(data);

  suspender
    .then((data) => {
      status = "success";
      result = data;
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
        // console.log(result);
        toast.error(result.error.messages, {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 5000,
        });
        toast.clearWaitingQueue();
        return prevState;
      } else if (status === "success") {
        prevState = result;
        return result;
      }
    },
  };
}
