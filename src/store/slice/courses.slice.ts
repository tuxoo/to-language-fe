import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICourse} from "../../model/interfaces/course/ICourse";

export interface CoursesState {
    courses: ICourse[];
}

const initialState: CoursesState = {
    courses: []
}

export const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        removeCourse: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            const existingCourses = state.courses.find(course => course.id !== id)
            if (existingCourses) {
                state.courses.filter(course => course.id !== id)
            }
        }
    }
})

export const coursesActions = coursesSlice.actions;
export const coursesReducer = coursesSlice.reducer;