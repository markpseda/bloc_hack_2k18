const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

 exports.tester = functions.database.ref(`test`)
    .onCreate((snap, context)=>{
        console.log("here1");
        let data = snap.val();
        console.log(data);
        return;
    });