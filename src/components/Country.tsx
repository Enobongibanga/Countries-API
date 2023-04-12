import React from "react";


import { useAppSelector } from "../app/hooks";

import CountriesTable from "./CountriesTable";


const Country = () => {
  const { isLoading, isError } = useAppSelector((state) => state.countriesR);

  

  return (
    
    <div>
   
      <div>
      
      </div>
      {isLoading && (
        <div>
          <h1>LOADING.....</h1>
        </div>
      )}

      {isError && (
        <div>
          <h1>ERROR.....</h1>
        </div>
      )}

      <CountriesTable />
    </div>
  );
};

export default Country;
