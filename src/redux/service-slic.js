import { createSlice } from "@reduxjs/toolkit";
let serviceSlic = createSlice({
    name: "service-slic",
    initialState: { data: [], filterdData: [], savedData: [], service: {} },
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
        filterBySearch(state, action) {
            if (action.payload != "") {
                state.filterdData = state.data.filter((element) =>
                    element.serviceName.includes(action.payload)
                );
            } else {
                //Reset filteredData array from original data array
                state.filterdData = state.data;
            }
        },
        setService(state, action) {
            state.service = action.payload;
        },
        updateIsSave(state, action) {
            let index = state.data.findIndex((element) => element.id == action.payload.id);
            state.data[index] = action.payload;
            state.filterdData = state.data;
            state.service = action.payload;
        },
        update(state, action) {
            let index = state.data.findIndex((element) => element.id == action.payload.id);
            state.data[index] = action.payload;
            state.filterdData = state.data;
            state.service = action.payload;
        },
        delete(state, action) {
            let filterdData = state.data.filter(
                (element) => element.id != action.payload
            );
            state.data = filterdData;
            state.filterdData = state.data;
        }

    },
});
export const serviceReducer = serviceSlic.reducer;
export const serviceActions = serviceSlic.actions;
