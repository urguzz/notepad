import { useState } from "react";
import firebase from "firebase";
import _ from "lodash";

import LayoutFooter from "../../containers/LayoutFooter/LayoutFooter";
import LayoutHeader from "../../containers/LayoutHeader/LayoutHeader";
import WidgetList from "../../containers/WidgetList/WidgetList";
import {
  addNote,
  deleteNote,
  updateNote,
} from "../../api/firebase/notes.repository";
import Note from "../../api/interfaces/note/note";

import styles from "./NotesPage.less";

function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const userId = firebase.auth().currentUser?.uid;

  //update state on firebase db change
  firebase
    .database()
    .ref("users/" + userId + "/notes/")
    .on("value", (snapshot) => {
      if (snapshot.val()) {
        const firebaseNotes: any = [];
        Object.values(snapshot.val() as { _: Note }).forEach((note: Note) => {
          firebaseNotes.push(note);
        });
        if (!_.isEqual(firebaseNotes, notes)) {
          setNotes(firebaseNotes);
        }
      }
    });

  //api calls
  const handleAddNote = () => {
    const notesIdList = new Set<number>();
    notes.forEach((note) => notesIdList.add(note.id!));
    let newNoteUniqueId = 0;
    notesIdList.forEach(() => {
      if (!notesIdList.has(newNoteUniqueId)) {
        return;
      }
      newNoteUniqueId++;
    });
    const newNote: Note = {
      title: "New note",
      content: "Note content",
      id: newNoteUniqueId,
    };
    addNote(newNote);
  };
  const handleOnDelete = (noteId: number) => {
    deleteNote(noteId);
  };
  const handleOnEdit = (editedNote: Note) => {
    updateNote(editedNote);
  };

  return (
    <div className={styles.Wrapper}>
      <LayoutHeader onClickAddButton={handleAddNote} />
      <WidgetList
        notes={notes}
        onDelete={handleOnDelete}
        onEdit={handleOnEdit}
      />
      <LayoutFooter />
    </div>
  );
}

export default NotesPage;
