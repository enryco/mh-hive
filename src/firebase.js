import Firebase from 'firebase/app'
import 'firebase/database'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDKMDJe8cYX0adZgXtwUaES5wBumOBDByY",
  authDomain: "mh-hub-hive.firebaseapp.com",
  databaseURL: "https://mh-hub-hive.firebaseio.com",
  projectId: "mh-hub-hive",
  storageBucket: "mh-hub-hive.appspot.com",
  messagingSenderId: "458092822813"
}

const firebase = Firebase.initializeApp(config)

export default firebase
