import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyD9oCuHPZNK1QkXatuDMNRVzBE6MukTAbM",
    authDomain: "felz-todo-app-587ff.firebaseapp.com",
    databaseURL: "https://felz-todo-app-587ff.firebaseio.com",
    storageBucket: "felz-todo-app-587ff.appspot.com",
    messagingSenderId: "324959662211"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
