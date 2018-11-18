firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    let dateTime = Date();
    firebase.database().ref(`a-user/${uid}`).update(
      {
        'timeStamp': dateTime
      }
      );
    sessionStorage.setItem('priv-storage-user', uid);
    window.location.assign("./search.html");
    // ...
  } else {
    // User is signed out.
    // ...
  }
  // ...
});
