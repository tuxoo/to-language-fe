import {Course} from "../../model/course.model";

export interface CoursesState {
    courses: Course[];
}

const initialState: CoursesState = {
    courses: []
}
//
// export const coursesSlice = createSlice({
//     name: "courses",
//     initialState,
//     reducers: {
//         addCourse: (state, action: PayloadAction<Course>) => {
//             state.courses.push(action.payload)
//         },
//         removeCourse: (state, action: PayloadAction<string>) => {
//             state.courses = state.courses.filter(course => course.id !== action.payload)
//         },
//     }
// })
//
// export const coursesActions = coursesSlice.actions;
// export const coursesReducer = coursesSlice.reducer;