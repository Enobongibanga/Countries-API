import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
import { CountryState } from "../../types/country";

const initialState: CountryState = {
  countries: [],
  isLoading: false,
  isError: false,
  message: "",
};

const baseURL = "https://restcountries.com/v3.1/all";

const baseURL2 = "https://restcountries.com/v3.1/name/";

export const getAllCountries = createAsyncThunk(
  "countries/getAll",
  async (_, thunkAPI) => {
    const response = await axios.get(baseURL);

    const data = await response.data;
    return data;
  }
);

export const getCountryByName = createAsyncThunk(
  "countries/getCountryByName",
  async (name: string, thunkAPI) => {
    const response = await axios.get(baseURL2+name);

    const data = await response.data;
    return data;
  }
);

export const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: { search: (state, action) => {} },
  extraReducers: (builder) => {
    //   fulfilled
    builder.addCase(getAllCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
      state.isLoading = false;
      state.message = "loading successful";
    });

    builder.addCase(getCountryByName.fulfilled, (state, action) => {
      state.countries = action.payload;
      state.isLoading = false;
      state.message = "loading successful";
    });

    //   pending
    builder.addCase(getAllCountries.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCountryByName.pending, (state, action) => {
      state.isLoading = true;
    });
    // isRejected

    builder.addCase(getAllCountries.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "loading failed";
      state.countries = [];
    });
    builder.addCase(getCountryByName.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = "loading failed";
      state.countries = [];
    });
  },
});

export const { search } = countrySlice.actions;

export const selectCountries = (state: RootState) => state.countriesR;

export default countrySlice.reducer;


