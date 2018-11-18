document.getElementById("logout").addEventListener('click', function(){
   firebase.database().ref(`a-users/${sessionStorage.getItem("priv-storage-user")}`).remove();
   sessionStorage.setItem("priv-storage-user", "null");
   window.location.assign("./index.html");
});