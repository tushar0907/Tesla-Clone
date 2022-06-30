import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model y", "Solar Roof"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
