import { initializeApp, cert, getApps } from "firebase-admin";
import { getFirestore} from "firebase-functions/firestore";
import { credentials } from "../credentials";

export default function dbConnect() {
if (!getApps().length){
initializeApp({
    credentail: cert(credentials)
})

}
return getFirestore();
}