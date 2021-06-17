import { createSlice } from "@reduxjs/toolkit";

import Note from "../api/Note/Note";

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
      //find unique id for the new note to add
      const { noteTitle, noteContent } = action.payload;
      const notesIdList = new Set<number>();
      state.notes.forEach((note) => notesIdList.add(note.id));
      let newNoteUniqueId = 0;
      notesIdList.forEach(() => {
        if (!notesIdList.has(newNoteUniqueId)) {
          return;
        }
        newNoteUniqueId++;
      });

      state.notes.push({
        id: newNoteUniqueId,
        title: noteTitle,
        content: noteContent,
        isBeingEdited: false,
      });
    },

    deleteNote: (
      state,
      action: {
        type: string;
        payload: {
          idOfNoteToDelete: number;
        };
      }
    ) => {
      const noteIndex = state.notes.findIndex(
        (note) => note.id === action.payload.idOfNoteToDelete
      );
      if (noteIndex !== -1) {
        state.notes = state.notes
          .slice(0, noteIndex)
          .concat(state.notes.slice(noteIndex + 1));
      }
    },

    editNote: (
      state,
      action: {
        type: string;
        payload: {
          editedNote: Note;
        };
      }
    ) => {
      const editedNote = action.payload.editedNote;
      const noteIndex = state.notes.findIndex(
        (note) => note.id === editedNote.id
      );
      if (noteIndex !== -1) {
        state.notes[noteIndex] = editedNote;
        state.notes[noteIndex].isBeingEdited = false;
      }
    },
    
    startEditNote: (
      state,
      action: {
        type: string;
        payload: {
          idOfNoteToEdit: number;
        };
      }
    ) => {
      state.notes.forEach((note) => {
        note.isBeingEdited =
          note.id === action.payload.idOfNoteToEdit ? true : false;
      });
    },
  },
});

export const { addNote, deleteNote, editNote, startEditNote } =
  spentsDataSlice.actions;
export default spentsDataSlice.reducer;
