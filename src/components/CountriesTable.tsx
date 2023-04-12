import React, { useState, useEffect, FormEvent } from "react";
import "./CountriesTable.css";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  getAllCountries,
  getCountryByName,
} from "../redux/country/countryslice";
import { useDispatch } from "react-redux";

import { AiOutlineHeart } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CountryType } from "../types/country";
import { add, reset } from "../redux/favouriteSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CountriesTable = () => {
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState("");

  const { countries } = useAppSelector((state) => state.countriesR);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getCountryByName(search));
  };

  const handleChange = (value: string) => {
    setSearch(value);
  };

  const handleAddToFavourite = (country: {
    name: string;
    flags: { png: string; alt?: string };
  }) => {
    dispatch(add(country));
    toast("Country added to favourites");
  };

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <div className="relative hoverflow-x-auto  text-base max-w-screen-xl mx-auto">
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="search a country"
            name="search"
            onChange={(e) => handleChange(e.target.value)}
            value={search}
          />
          <button type="submit" className="p-2 bg-red-500">
            {" "}
            Search{" "}
          </button>
        </form>
      </div>
      <div className="tablewrap mt-8">
        <table>
          <thead>
            <tr>
              <th>Flag</th>
              <th>Name</th>
              <th>Region</th>
              <th>Population</th>
              <th>Languages</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {countries.length > 0 &&
              countries.map((country, index) => {
                const { name, region, population, languages, flags } = country;
                return (
                  <tr key={index}>
                    <td>
                      <img
                        className="flagsize"
                        src={flags.png}
                        alt={flags.alt}
                      />
                    </td>
                    <td>
                      {" "}
                      <Link state={country} to="countrydetails">
                        {name.common}
                      </Link>
                    </td>
                    <td>{region}</td>
                    <td>{population.toLocaleString()}</td>
                    <td>
                      {languages && (
                        <ul>
                          {Object.values(languages).map(
                            (language, languageIndex) => (
                              <li key={languageIndex}>{language}</li>
                            )
                          )}
                        </ul>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          handleAddToFavourite({
                            name: name.common,
                            flags: flags,
                          })
                        }
                      >
                        <AiOutlineHeart className="favourite-btn" />
                      </button>
                    </td>

                    <td>
                      {" "}
                      <Link state={country} to="countrydetails">
                        <FaAngleRight />{" "}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            <ToastContainer />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountriesTable;
