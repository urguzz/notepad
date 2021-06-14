import { createSlice } from "@reduxjs/toolkit";

import Note from "../components/WidgetsField/NoteWidget/NoteWidgetCard/Note/Note";

export interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
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
          noteTitle: string;
          noteContent: string;
        };
      }
    ) => {
      const { noteTitle, noteContent } = action.payload;
      const indexes = new Set<number>();
      state.notes.forEach((note) => indexes.add(note.index));
      let indexOfNoteToAdd = 0;
      indexes.forEach(() => {
        if (!indexes.has(indexOfNoteToAdd)) {
          return;
        }
        indexOfNoteToAdd++;
      });
      state.notes.push({
        index: indexOfNoteToAdd,
        title: noteTitle,
        content: noteContent,
      });
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
      state.notes = state.notes.filter(
        (note) => note.index !== action.payload.indexOfNoteToDelete,
        1
      );
    },
    editNoteTitle: (
      state,
      action: {
        type: string;
        payload: {
          newTitle: string;
          indexOfNoteToEdit: number;
        };
      }
    ) => {
      const { newTitle, indexOfNoteToEdit } = action.payload;
      const noteIndex = state.notes.findIndex(
        (note) => note.index === indexOfNoteToEdit
      );
      if (noteIndex !== -1) {
        state.notes[noteIndex].title = newTitle;
      }
    },
    editNoteContent: (
      state,
      action: {
        type: string;
        payload: {
          newContent: string;
          indexOfNoteToEdit: number;
        };
      }
    ) => {
      const { newContent, indexOfNoteToEdit } = action.payload;
      const noteIndex = state.notes.findIndex(
        (note) => note.index === indexOfNoteToEdit
      );
      if (noteIndex !== -1) {
        state.notes[noteIndex].content = newContent;
      }
    },
  },
});

export const { addNote, deleteNote, editNoteTitle, editNoteContent } =
  spentsDataSlice.actions;
export default spentsDataSlice.reducer;
