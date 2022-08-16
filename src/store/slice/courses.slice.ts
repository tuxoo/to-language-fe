import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICourse} from "../../model/interfaces/course/ICourse";

export interface CoursesState {
    courses: ICourse[];
}

const initialState: CoursesState = {
    courses: []
    // courses: [
    //     {
    //         "id": "62f952b84eeb8d089a589cdc",
    //         "language": "RU",
    //         "description": "",
    //         "startedAt": "2022-08-14T19:53:28.235Z"
    //     },
    //     {
    //         "id": "62f952b84eeb8d089a589cdd",
    //         "language": "RU",
    //         "description": "",
    //         "startedAt": "2022-08-14T19:53:28.821Z"
    //     },
    //     {
    //         "id": "62f952b94eeb8d089a589cde",
    //         "language": "RU",
    //         "description": "",
    //         "startedAt": "2022-08-14T19:53:29.326Z"
    //     }
    // ]
}

export const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addCourse: (state, action: PayloadAction<ICourse>) => {
            state.courses.push(action.payload)
        },
        removeCourse: (state, action: PayloadAction<string>) => {
            state.courses = state.courses.filter(course => course.id !== action.payload)
        },
    }
})

export const coursesActions = coursesSlice.actions;
export const coursesReducer = coursesSlice.reducer;