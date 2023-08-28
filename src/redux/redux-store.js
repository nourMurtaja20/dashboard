import { configureStore } from "@reduxjs/toolkit";
import { projectReducer } from "./project-slic";
import { donorReducer } from "./donor-slic";
import { serviceReducer } from "./service-slic";
import { frrelancerReducer } from "./freelancer-slic";
import { templateReducer } from "./template-slic";
import { notificationReducer } from "./notification-slic";


export const reduxStore = configureStore({
    reducer: {
        projects: projectReducer,
        donors: donorReducer,
        services: serviceReducer,
        frrelancers: frrelancerReducer,
        templates: templateReducer,
        notifications: notificationReducer,
    },
});