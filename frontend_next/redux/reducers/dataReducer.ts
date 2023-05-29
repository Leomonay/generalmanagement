import { createSlice } from "@reduxjs/toolkit";
import { organization } from "@/appConfig";

interface storeType {
  user: {
    email?: string;
    access?: string;
  };
  organization: string;
}

const initialState: storeType = {
  user: {},
  organization,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     return {
  //       ...state,
  //       ...action.payload.data,
  //     };
  //   },
  // },
});

// Action creators are generated for each case reducer function
export const { setUserData } = dataSlice.actions;

export default dataSlice.reducer;
