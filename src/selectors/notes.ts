import { RootState } from "../store";
import Note from "../components/NoteWidget/Note/Note";

export const selectNotes = (state: RootState): Note[] =>
  state.notesReducer.notes;
