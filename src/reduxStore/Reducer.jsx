import { createSlice } from '@reduxjs/toolkit';
import {carStores} from '../CarData';

const initialState = {
	  vehicles : carStores
}

export const carsSlice = createSlice({
        name: "data", 
		initialState,
		reducers:{

		}
})