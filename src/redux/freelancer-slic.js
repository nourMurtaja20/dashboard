import { createSlice } from "@reduxjs/toolkit";
let frrelancerSlic = createSlice({
    name: "freelancer-slic",
    initialState: { data: [], filterdData: [], freelancer: {}, status: "All", area: "All" },
    reducers: {
        create(state, action) {
            state.data.push(action.payload);
        },
        read(state, action) {
            state.data = action.payload;
            state.filterdData = state.data;
        },
        filterByField(state, action) {
            state.status = action.payload;
            if (action.payload != "All") {
                state.filterdData = state.data.filter(
                    (element) => element.fieldOfWork === action.payload
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
                state.filterdData = state.data.filter((element) => element.country === action.payload);
            }
        },
        filterBySearch(state, action) {
            if (action.payload != "") {
                state.filterdData = state.data.filter((element) =>
                    element.name.includes(action.payload)
                );
            } else {
                //Reset filteredData array from original data array
                state.filterdData = state.data;
            }
        },
        setfreelancer(state, action) {
            state.freelancer = action.payload;
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
export const frrelancerReducer = frrelancerSlic.reducer;
export const frrelancerActions = frrelancerSlic.actions;
