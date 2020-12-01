import { createContext, useReducer } from "react";
import { MANAGE_COUNTRY_DATA } from "./dataActionType";
import dataReducer from "./dataReducer";

const initialState = {};

export const DataContext = createContext(initialState);

export function DataContextProvider({ children }) {
  let [state, dispatch] = useReducer(dataReducer);

  function manageCountryData(dataObj) {
    dispatch({
      type: MANAGE_COUNTRY_DATA,
      payload: {
        iso2: dataObj?.iso2,
        fullUrl: dataObj?.fullUrl,
      },
    });
  }

  return (
    <DataContext.Provider
      value={{
        data: state,
        manageCountryData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
