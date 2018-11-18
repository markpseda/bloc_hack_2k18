const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();
const mybucket ="priv-storage.appspot.com";

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


exports.uploadFile = functions.storage.bucket(mybucket).object().onFinalize((object, context) => {
    // [START eventAttributes]
    console.log(object);
    console.log(context);
    const fileBucket = object.bucket; // The Storage bucket that contains the file.
    let filePath = object.name; // File path in the bucket.
    const contentType = object.contentType; // File content type.
    const resourceState = object.resourceState; // The resourceState is 'exists' or 'not_exists' (for file/folder deletions).
    const metageneration = object.metageneration; // Number of times metadata has been generated. New objects have a value of 1.
    console.log(filePath);
    // [END eventAttributes]
    // console.log(fileBucket);
    var path = filePath.slice(0, filePath.lastIndexOf('/'));
    var file = filePath.slice(filePath.lastIndexOf('/') + 1);
    console.log("Running function***********: " + path + "  file:" + file);
    console.log("using v0.2");
    // write log to database based on the change of storage
    let mettaToken = object.mettadata['firebaseStorageDownloadTokens'];
    let downloadURL = `https://firebasestorage.googleapis.com/v0/b/priv-storage.appspot.com/o/files%2F${}?alt=media&token=${mettaToken}`;
    console.log(downloadURL);
    firebase.database().ref(`documents`).update(
        {
            file:downloadURL
        }
        
        )
    return;
});