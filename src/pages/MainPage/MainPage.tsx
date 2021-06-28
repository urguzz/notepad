import { useEffect, useState } from "react";
import firebase from "firebase/app";

import LayoutFooter from "../../containers/LayoutFooter/LayoutFooter";
import LayoutHeader from "../../containers/LayoutHeader/LayoutHeader";
import NotesContainer from "../../containers/NotesContainer/NotesContainer";
import HomeContainer from "../../containers/HomeContainer/HomeContainer";
import Note from "../../api/interfaces/note/note";
import {
  addNote,
  deleteNote,
  updateNote,
} from "../../api/firebase/notes.repository";
import { signOut } from "../../api/firebase/user.repository";

import styles from "./MainPage.less";

function MainPage() {
  const [activeTab, setActiveTab] = useState("0");
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
      if (snapshot.val() && user?.providerId) {
        const firebaseNotes: Note[] = [];
        Object.values(snapshot.val() as Note).forEach((note: Note) => {
          firebaseNotes.push(note);
        });
        setNotes(firebaseNotes);
      }
    });
    return () => {
      database?.off();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [database]);

  //api calls
  const handleOnChangeTab = (tabKey: string) => {
    setActiveTab(tabKey);
  };
  const handleOnSignOut = () => {
    signOut();
  };
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

  const contentMap = new Map<string, React.ReactNode>([
    ["0", <HomeContainer />],
    [
      "1",
      <NotesContainer
        notes={notes}
        onAdd={handleOnAdd}
        onDelete={handleOnDelete}
        onEdit={handleOnEdit}
      />,
    ],
  ]);

  return (
    <div className={styles.PageWrapper}>
      <LayoutHeader
        onSignOut={handleOnSignOut}
        onChangeTab={handleOnChangeTab}
      />
      <div className={styles.ContentWrapper}>{contentMap.get(activeTab)}</div>
      <LayoutFooter />
    </div>
  );
}

export default MainPage;
