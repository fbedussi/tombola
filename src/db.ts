import firebase from 'firebase'
// Required for side-effects
import firestore from 'firebase/firestore'

firebase.initializeApp({
  apiKey: __myapp.env.API_KEY,
  authDomain: __myapp.env.AUTH_DOMAIN,
  projectId: __myapp.env.PROJECT_ID,
  storageBucket: __myapp.env.STORAGE_BUCKET,
  messagingSenderId: __myapp.env.MESSAGING_SENDER_ID,
  appId: __myapp.env.APP_ID,
});

var db = firebase.firestore();

export const initNewGame = () => 
  db.collection("games").add({
    extractedNumbers: []
  })
  .then(function(docRef) {
    return docRef.id
  })
  .catch(function(error) {
      console.error("Error generating new game: ", error);
  });

export const writeLastNumber = async (gameId: string, lastNumber: number) => {
  var docRef = db.collection("games").doc(gameId);

  const data = await docRef.get().then(function(doc) {
    if (doc.exists) {
        return doc.data()
      } else {
        throw "No such document!";
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  data && db.collection("games").doc(gameId).update({extractedNumbers: data.extractedNumbers.concat(lastNumber)}).catch(function(error) {
    console.error("Error writing last number: ", error);
  });
}

export const subscribeLastNumber = (gameId: string, callback: (lastNumber: number) => void) => {
  db.collection("games").doc(gameId)
    .onSnapshot(function(doc) {
        const data = doc.data()
        console.log("Current data: ", data);
        callback(data.extractedNumbers[data.extractedNumbers.length - 1])
    });
}

export const getExtractedNumbers = async (gameId: string) => db.collection("games").doc(gameId).get().then(function(doc) {
    if (doc.exists) {
        return doc.data()
      } else {
        throw "No such document!";
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
