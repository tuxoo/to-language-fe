import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Note} from "../../model/note.model";
import {Page} from "../../model/pagination/page.model";
import {ApiError} from "../../model/error.model";
import {noteService} from "../../service/note.service";

interface NoteSliceState {
    notes?: Page<Note>;
    error?: ApiError;
    isLoading: boolean;
}

const initialState: NoteSliceState = {
    notes: undefined,
    error: undefined,
    isLoading: false,
}

export const GET_NOTES_ACTION = 'notes/page';

const fetchNotes = createAsyncThunk<Page<Note>, string, { rejectValue: ApiError }>(
    GET_NOTES_ACTION,
    async (courseId, thunkApi) => {
        try {
            const response = await noteService.getNotes(courseId);
            return response.data;
        } catch (error: any) {
            const err: ApiError = {message: error.response.data}; // TODO: add another fields
            return thunkApi.rejectWithValue(err);
        }
    })

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchNotes.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchNotes.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.notes = payload;
            state.error = undefined;
        });
        builder.addCase(fetchNotes.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.notes = undefined;
            state.error = payload;
        });
    },
});

export default notesSlice.reducer;
export {fetchNotes};