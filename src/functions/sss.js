import firebaseApp from "../firebase/credenciales";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const auth = getAuth(firebaseApp);

// async function loginEmailPassword(email, password) {
//     signInWithEmailAndPassword(auth, email, password);
// }

export const loginWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

