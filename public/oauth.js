firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    firebase.database().ref(`a-users/`).update(
      {uid:true}
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
