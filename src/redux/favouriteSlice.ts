
import { createSlice } from "@reduxjs/toolkit";

type StateValue = {
  name: string;
  flags: { png: string; alt?: string };
}

type State = {
  value: StateValue[];
};

const initialState = {
  value: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state: State, action) => {
      let temp_state = [...state.value]
      temp_state = temp_state.filter((value) => value.name !== action.payload.name)
      state.value = [...temp_state, action.payload];
    },
    reset: (state: State) => {
      state.value = [];
    },
  },
});

export const { add, reset } = favouriteSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export default favouriteSlice.reducer;
