import React from "react";
import { useKeyGen } from "react-key-from-object";
import { useSelector } from "react-redux";

export const FavouritePage = () => {
  const favouriteCountries = useSelector((state) => state.favourite.value);
  const keyGen = useKeyGen();
  return (
    <>
      <div className='text-center font-bold text-2xl'>Favourite Countries</div>
      {favouriteCountries.map((country) => (
        <div key={keyGen.getKey(country)}>
          {country.name}{" "}
          <img
            className="flagsize pb-2.5 "
            src={country.flags.png}
            alt={country.flags.alt}
          />
        </div>
      ))}
    </>
  );
};
