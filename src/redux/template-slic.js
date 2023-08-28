import { createSlice } from "@reduxjs/toolkit";
let templateSlic = createSlice({
    name: "template-slic",
    initialState: { data: [], filterdData: [], template: {}, status: "All", area: "All" },
    reducers: {
        create(state, action) {
            state.data.push(action.payload);
            state.filterdData = state.data;
        },
        read(state, action) {
            state.data = action.payload;
            state.filterdData = state.data;
        },
        filterByField(state, action) {
            state.status = action.payload;
            if (action.payload != "All") {
                state.filterdData = state.data.filter(
                    (element) => element.scope === action.payload
                );
            } else {
                //Reset filteredData array from original data array
                state.filterdData = state.data;
            }
        },
        filterByGeographicArea(state, action) {
            state.area = action.payload;
            if (action.payload === "All") {
                state.filterdData = state.data;
            }
            else {
                state.filterdData = state.data.filter((element) => element.focusCountry === action.payload);
            }
        },
        filterBySearch(state, action) {
            if (action.payload != "") {
                state.filterdData = state.data.filter((element) =>
                    element.conceptNote.includes(action.payload)
                );
            } else {
                //Reset filteredData array from original data array
                state.filterdData = state.data;
            }
        },
        delete(state, action) {
            let filterdData = state.data.filter(
                (element) => element.id != action.payload
            );
            state.data = filterdData;
            state.filterdData = state.data;
        },
    },
});
export const templateReducer = templateSlic.reducer;
export const templateActions = templateSlic.actions;
