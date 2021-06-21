import firebase from "firebase";

import UserCredentials from "../interfaces/user/user";

export const signUp = (user: UserCredentials) => {
  const { email, password } = user;
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      if (error.code === "auth/weak-password") {
        alert("The password is too weak.");
      } else {
        alert(error.message);
      }
      console.log(error);
    });
};

export const signIn = (user: UserCredentials) => {
  const { email, password } = user;
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      if (error.code === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        alert(error.message);
      }
      console.log(error);
    });
};

export const signOut = () => {
  return firebase
    .auth()
    .signOut()
    .catch((error) => {
      alert(error.message);
      console.log(error);
    });
};
