import { createSlice } from "@reduxjs/toolkit";
let projectSlic = createSlice({
    name: "project-slic",
    initialState: { data: [], filterdData: [], savedData: [], project: {}, status: "All", area: "All" },
    reducers: {
        create(state, action) {
            state.data.push(action.payload);
        },
        read(state, action) {
            state.data = action.payload;
            state.filterdData = state.data;
        },
        readsave(state, action) {
            state.savedData = action.payload;
        },
        filterByField(state, action) {
            state.status = action.payload;
            if (action.payload != "All") {
                state.filterdData = state.data.filter(
                    (element) => element.field === action.payload
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
        filterBystatus(state, action) {
            state.status = action.payload;
            if (action.payload != "All") {
                state.filterdData = state.data.filter(
                    (element) => element.field === action.payload // change .filed to .status
                );
            } else {
                //Reset filteredData array from original data array
                state.filterdData = state.data;
            }
        },
        filterBySearch(state, action) {
            if (action.payload != "") {
                state.filterdData = state.data.filter((element) =>
                    element.projectName.includes(action.payload)
                );
            } else {
                //Reset filteredData array from original data array
                state.filterdData = state.data;
            }
        },
        setProject(state, action) {
            state.project = action.payload;
        },
        updateIsSave(state, action) {
            let index = state.data.findIndex((element) => element.id == action.payload.id);
            state.data[index] = action.payload;
            state.filterdData = state.data;
            state.project = action.payload;
        },
        update(state, action) {
            let index = state.data.findIndex((element) => element.id == action.payload.id);
            state.data[index] = action.payload;
            state.filterdData = state.data;
            state.project = action.payload;
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
export const projectReducer = projectSlic.reducer;
export const projectActions = projectSlic.actions;
