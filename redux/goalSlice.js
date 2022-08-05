import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    goals: ["HOUS"],
};

const goalSlice = createSlice({
    name: "goal",
    initialState,
    reducers: {
        addGoal: (state, action) => {state.goals.push(action.payload)},
        removeGoal: (state, action) =>
            {state.goals = state.goals.filter(
                (item) => item !== action.payload
            )},
    },
});

export const {addGoal, removeGoal} = goalSlice.actions

export default goalSlice.reducer