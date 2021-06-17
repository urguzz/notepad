import { RootState } from "../store";
import Note from "../api/Note/Note";

export const selectNotes = (state: RootState): Note[] =>
  state.notesReducer.notes;
