import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyD9oCuHPZNK1QkXatuDMNRVzBE6MukTAbM",
  authDomain: "felz-todo-app-587ff.firebaseapp.com",
  databaseURL: "https://felz-todo-app-587ff.firebaseio.com",
  storageBucket: "felz-todo-app-587ff.appspot.com",
  messagingSenderId: "324959662211"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'James',
    age: 28
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Study React.js'
});

todosRef.push({
  text: 'Study Node.js'
});
