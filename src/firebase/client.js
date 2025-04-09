import {initializeApp} from "firebase/app"

import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {

    // Aca va el objeto que nos da Firebase:

    apiKey: "AIzaSyDZ1upKAql2XwJAxlu1RgPqPK5C80ajA2w",
    authDomain: "quecelcoder.firebaseapp.com",
    projectId: "quecelcoder",
    storageBucket: "quecelcoder.firebasestorage.app",
    messagingSenderId: "529809189165",
    appId: "1:529809189165:web:c6d00dfeb345dd3a8f8ba4"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);