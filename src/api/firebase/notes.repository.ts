import firebase from "firebase/app";

import Note from "../interfaces/note/note";

export const addNote = (note: Note) => {
  const userId = firebase.auth().currentUser?.uid;
  firebase
    .database()
    .ref("users/" + userId + "/notes/" + note.id)
    .set(note);
};

export const deleteNote = (noteId: number) => {
  const userId = firebase.auth().currentUser?.uid;
  firebase
    .database()
    .ref("users/" + userId + "/notes/" + noteId)
    .remove();
};

export const updateNote = (note: Note) => {
  const userId = firebase.auth().currentUser?.uid;
  firebase
    .database()
    .ref("users/" + userId + "/notes/" + note.id)
    .update(note);
};

export const clearNotes = () => {
  const userId = firebase.auth().currentUser?.uid;
  firebase
    .database()
    .ref("users/" + userId + "/notes/")
    .remove();
};
