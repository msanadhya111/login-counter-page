import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0
    },
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increaseByNumber(state, action) {
            state.counter = state.counter + action.payload;
        }
    }
})

export const actions = counterSlice.actions;

export default counterSlice.reducer;