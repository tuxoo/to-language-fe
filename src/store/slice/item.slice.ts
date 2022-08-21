import {ApiError} from "../../model/error.model";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {itemService} from "../../service/item.service";
import {Language} from "../../model/language.model";
import {NoteType} from "../../model/note-type.model";

interface ItemSliceState {
    languages: Language[];
    noteTypes: NoteType[];
    error?: ApiError;
    isLoading: boolean;
}

const initialState: ItemSliceState = {
    languages: [],
    noteTypes: [],
    error: undefined,
    isLoading: false,
}

export const GET_LANGUAGES_ACTION = 'items/languages';
export const GET_NOTE_TYPES_ACTION = 'items/note-types';


const fetchLanguages = createAsyncThunk<Language[], void, { rejectValue: ApiError }>(
    GET_LANGUAGES_ACTION,
    async (_, thunkApi) => {
        try {
            const response = await itemService.getLanguages();
            return response.data;
        } catch (error: any) {
            const err: ApiError = {message: error.response.data} // TODO: add another fields
            return thunkApi.rejectWithValue(err)
        }
    });

const fetchNoteTypes = createAsyncThunk<NoteType[], void, { rejectValue: ApiError }>(
    GET_NOTE_TYPES_ACTION,
    async (_, thunkApi) => {
        try {
            const response = await itemService.getNoteTypes();
            return response.data;
        } catch (error: any) {
            const err: ApiError = {message: error.response.data} // TODO: add another fields
            return thunkApi.rejectWithValue(err)
        }
    });

const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchLanguages.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchLanguages.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.languages = payload;
            state.error = undefined;
        });
        builder.addCase(fetchLanguages.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.languages = [];
            state.error = payload;
        });
        builder.addCase(fetchNoteTypes.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchNoteTypes.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.noteTypes = payload;
            state.error = undefined;
        });
        builder.addCase(fetchNoteTypes.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.noteTypes = [];
            state.error = payload;
        });
    },
});

export default itemsSlice.reducer;
export {fetchLanguages, fetchNoteTypes};