import { createSlice } from "@reduxjs/toolkit";
let notificationSlic = createSlice({
    name: "notification-slic",
    initialState: { data: [], filterdData: [] },
    reducers: {
        create(state, action) {
            state.data.push(action.payload);
        },
        read(state, action) {
            state.data = action.payload;
            state.filterdData = state.data;
        },
        delete(state, action) {
            let filterdData = state.data.filter(
                (element) => element.id != action.payload
            );
            state.data = filterdData;
            state.filterdData = state.data;
        },
        deleteAll(state, action) {
            state.data = [];
            state.filterdData = [];
        },
    },
});
export const notificationReducer = notificationSlic.reducer;
export const notificationActions = notificationSlic.actions;
