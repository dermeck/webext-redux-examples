import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
  moep: string;
};

const initialState: SliceState = { moep: "moep" };

const mySlice = createSlice({
  name: "mySlcice",
  initialState,
  reducers: {},
});

export default mySlice;
