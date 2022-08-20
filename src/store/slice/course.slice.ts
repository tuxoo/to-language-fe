import {Course} from "../../model/course.model";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ApiError} from "../../model/error.model";
import {courseService} from "../../service/course-service";
import {push} from "connected-react-router";

interface CourseSliceState {
    currentCourse?: Course;
    courses: Course[];
    error?: ApiError;
    isLoading: boolean;
}

const initialState: CourseSliceState = {
    currentCourse: undefined,
    courses: [],
    error: undefined,
    isLoading: false,
}

export const GET_COURSES_ACTION = 'courses/page';
export const GET_COURSE_ACTION = 'courses/get';
export const DELETE_COURSE_ACTION = 'courses/delete';
export const EDIT_COURSE_ACTION = 'courses/edit';

const fetchCourses = createAsyncThunk<Course[], void, { rejectValue: ApiError }>(
    GET_COURSES_ACTION,
    async (_, thunkApi) => {
        try {
            const response = await courseService.getCourses();
            return response.data
        } catch (error: any) {
            const err: ApiError = {message: error.response.data} // TODO: add another fields
            return thunkApi.rejectWithValue(err)
        }
    });

const getCourse = createAsyncThunk<Course, string, { rejectValue: ApiError }>(
    GET_COURSE_ACTION,
    async (id: string, thunkApi) => {
        try {
            const response = await courseService.getCourse(id);
            thunkApi.dispatch(push(`/courses/${id}`));
            return response.data
        } catch (error: any) {
            const err: ApiError = {message: error.response.data} // TODO: add another fields
            return thunkApi.rejectWithValue(err)
        }
    });

const editCourse = createAsyncThunk<Course, Course, { rejectValue: ApiError }>(
    EDIT_COURSE_ACTION,
    async (editedCourse: Course, thunkApi) => {
        try {
            const response = await courseService.editCourse(editedCourse.id, editedCourse)
            return response.data
        } catch (error: any) {
            const err: ApiError = {message: error.response.data} // TODO: add another fields
            return thunkApi.rejectWithValue(err)
        }
    });

const deleteCourse = createAsyncThunk<void, string, { rejectValue: ApiError }>(
    DELETE_COURSE_ACTION,
    async (id: string, thunkApi) => {
        try {
            await courseService.deleteCourse(id);
        } catch (error: any) {
            const err: ApiError = {message: error.response.data} // TODO: add another fields
            return thunkApi.rejectWithValue(err)
        }
    });

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCourses.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchCourses.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.courses = payload;
            state.error = undefined;
        });
        builder.addCase(fetchCourses.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.courses = [];
            state.error = payload;
        });
        builder.addCase(getCourse.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(getCourse.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.currentCourse = payload;
            state.error = undefined;
        });
        builder.addCase(getCourse.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.currentCourse = undefined;
            state.error = payload;
        });
        builder.addCase(editCourse.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(editCourse.fulfilled, (state, action) => {
            state.isLoading = false;
            state.courses = state.courses.map(course => {
                if (course.id === action.meta.arg.id) {
                    return action.payload;
                }
                return course;
            });
            state.error = undefined;
        });
        builder.addCase(editCourse.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        });
        builder.addCase(deleteCourse.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(deleteCourse.fulfilled, (state, action) => {
            state.isLoading = false;
            state.courses = state.courses.filter(course => course.id !== action.meta.arg)
            state.error = undefined;
        });
        builder.addCase(deleteCourse.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        });
    },
});

export default coursesSlice.reducer;
export {fetchCourses, getCourse, editCourse, deleteCourse};