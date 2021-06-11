import { RootState } from "../store";
import Note from "../components/NoteWidget/NoteWidgetCard/Note/Note";

export const selectNotes = (state: RootState): Note[] =>
  state.notesReducer.notes;
