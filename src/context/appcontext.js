import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [location, setLocation] = useState("New York City");
  const [markMap, setMarkMap] = useState([]);
  const [search, setSearch] = useState("");

  const contextValue = {
    location,
    setLocation,
    markMap,
    setMarkMap,
    search,
    setSearch,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
