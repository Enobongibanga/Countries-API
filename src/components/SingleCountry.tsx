import React from "react";
import { Link, useLocation } from "react-router-dom";
import {  FaAngleLeft, FaMapMarkerAlt } from "react-icons/fa";

import ToggleIcon from "./ToggleIcon";

const SingleCountry = () => {

  const { state } = useLocation();

  return (
    <div className="max-w-sm mx-auto py-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <div className="flex items-center">
          <p className="w-8 h-8 bg-orange-600 text-white p-3 rounded-full flex items-center justify-center">
            {state.name.common[0]}
          </p>
          <div className="ml-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {state.name.common}
            </h5>
            <p>{state.capital}</p>
          </div>
        </div>
        <img
          className="rounded mt-8 mb-5 shadow"
          src={state.flags.svg}
          alt={state.flags.alt}
        />

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This country belongs to{" "}
          <span className="text-blue-600"> {state.region} </span> region and{" "}
          <span className="text-blue-600"> {state.subregion} </span> sub region,
          located at the{" "}
          <span className="text-blue-600"> {state.latlng[0]} </span> °N and{" "}
          <span className="text-blue-600"> {state.latlng[1]} </span> °W, this
          country has population of{" "}
          <span className="text-blue-600">
            {" "}
            {state.population.toLocaleString()}{" "}
          </span>
          and it has gained the independent, according to the CIA World
          Factbook.{" "}
        </p>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <Link to="/">
              {" "}
              <FaAngleLeft />
            </Link>

            <Link to={state.maps.googleMaps} target="_blank">
              {" "}
              <FaMapMarkerAlt />{" "}
            </Link>
          </div>

        
            <button>
          
            <ToggleIcon />
                </button>  
            
            

          
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
