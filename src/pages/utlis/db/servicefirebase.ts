import { getFirestore, collection, getDocs }  from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return products;
}