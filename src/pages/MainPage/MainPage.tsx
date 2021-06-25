import { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import firebase from "firebase";
import _ from "lodash";

import LayoutFooter from "../../containers/LayoutFooter/LayoutFooter";
import LayoutHeader from "../../containers/LayoutHeader/LayoutHeader";
import NotesContainer from "../../containers/NotesContainer/NotesContainer";
import HomeContainer from "../../containers/HomeContainer/HomeContainer";
import {
  addNote,
  deleteNote,
  updateNote,
} from "../../api/firebase/notes.repository";
import Note from "../../api/interfaces/note/note";

import styles from "./MainPage.less";

function MainPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [user, setUser] = useState<firebase.User | null>(null);
  const [database, setDatabase] = useState<firebase.database.Reference | null>(
    null
  );

  firebase.auth().onAuthStateChanged((newUser) => {
    if (newUser && newUser.providerId !== null && newUser.uid !== user?.uid) {
      setUser(newUser);
      setDatabase(firebase.database().ref("users/" + newUser.uid + "/notes/"));
    }
  });

  //update state on firebase db change
  useEffect(() => {
    database?.on("value", (snapshot) => {
      if (snapshot.val()) {
        const firebaseNotes: Note[] = [];
        Object.values(snapshot.val() as Note).forEach((note: Note) => {
          firebaseNotes.push(note);
        });
        if (!_.isEqual(firebaseNotes, notes)) {
          setNotes(firebaseNotes);
        }
      }
    });
    return () => {
      database?.off();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [database]);

  //api calls
  const handleOnAdd = () => {
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
    <div className={styles.PageWrapper}>
      <LayoutHeader />
      <div className={styles.ContentWrapper}>
        <Switch>
          <Route exact path="/u/notes">
            <NotesContainer
              notes={notes}
              onAdd={handleOnAdd}
              onDelete={handleOnDelete}
              onEdit={handleOnEdit}
            />
          </Route>
          <Route exact path="/u/home">
            <HomeContainer />
          </Route>
          <Route exact path="/u">
            <Redirect to="/u/home" />
          </Route>
          <Route path="*">
            <Redirect to="/error" />
          </Route>
        </Switch>
      </div>
      <LayoutFooter />
    </div>
  );
}

export default MainPage;
