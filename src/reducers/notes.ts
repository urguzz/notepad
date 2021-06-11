import { createSlice } from "@reduxjs/toolkit";

import Note from "../components/NoteWidget/NoteWidgetCard/Note/Note";

export interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  //notes: [],
  notes: [
    {
      title: "1",
      content: "qweqweqew",
    },
    {
      title: "2",
      content: "qweqweqweqweqwe qweqweqewqqewqweqweqw eqweqweqweqweqewqqew",
    },
    {
      title: "3",
      content: "qweqweq weqweqweqweqwe qewqqew",
    },
    {
      title: "4",
      content: "qweqweqwe qweqweqweqwe qewqqew",
    },
    {
      title: "5",
      content: "qweqweqw eqweqweqweqweq ewqqew",
    },
    {
      title: "6",
      content:
        "qweqweqweqweqweqweq wqweqweqweqweqweqweqw weqewqqewqweqweqweqw eqweqweqweqewqqewqw eqweqweqweqweqweqweqew qqeweqewqqew",
    },
    {
      title: "7",
      content:
        "qweqweqweqewqqewqeqw eqweqweqweqewqqewq weqweqweqweqweqweqw eqewqqew qweqweqweqweqweq weqweqewqqew qweqweqweqweqweq weqweqewqqew weqweqewqqew",
    },
    {
      title: "8",
      content: "qweqweqweqweqweq weqweqewqqew",
    },
    {
      title: "9",
      content: "qweqweq weqweqweqweqw eqewqqew",
    },
    {
      title: "10",
      content: "qweqweqew",
    },
    {
      title: "11",
      content: "qweqweqweqweqwe qweqweqewqqewqweqweqw eqweqweqweqweqewqqew",
    },
    {
      title: "12",
      content: "qweqweq weqweqweqweqwe qewqqew",
    },
    {
      title: "13",
      content: "qweqweqwe qweqweqweqwe qewqqew",
    },
    {
      title: "14",
      content: "qweqweqw eqweqweqweqweq ewqqew",
    },
    {
      title: "15",
      content:
        "qweqweqweqweqweqweq wqweqweqweqweqweqweqw weqewqqewqweqweqweqw eqweqweqweqewqqewqw eqweqweqweqweqweqweqew qqeweqewqqew",
    },
    {
      title: "16",
      content:
        "qweqweqweqewqqewqeqw eqweqweqweqewqqewq weqweqweqweqweqweqw eqewqqew",
    },
    {
      title: "17",
      content: "qweqweqweqweqweq weqweqewqqew",
    },
    {
      title: "18",
      content: "qweqweq weqweqweqweqw eqewqqew",
    },
  ],
};

export const spentsDataSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (
      state,
      action: {
        type: string;
        payload: {
          noteToAdd: Note;
        };
      }
    ) => {
      state.notes.push(action.payload.noteToAdd);
    },
    deleteNote: (
      state,
      action: {
        type: string;
        payload: {
          indexOfNoteToDelete: number;
        };
      }
    ) => {
      state.notes.splice(action.payload.indexOfNoteToDelete, 1);
    },
  },
});

export const { addNote, deleteNote } = spentsDataSlice.actions;
export default spentsDataSlice.reducer;
