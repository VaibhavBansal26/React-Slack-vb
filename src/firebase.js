
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAc_neQJSzFQ-RAC8hLfaF9ZLQ1RPHoTSc",
    authDomain: "react-slack-apl.firebaseapp.com",
    databaseURL: "https://react-slack-apl.firebaseio.com",
    projectId: "react-slack-apl",
    storageBucket: "react-slack-apl.appspot.com",
    messagingSenderId: "541106145556",
    appId: "1:541106145556:web:ccbef9c05b9f503a1dda01",
    measurementId: "G-3W62F1300W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export{auth,provider};
  export default db;