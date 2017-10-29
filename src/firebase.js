import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDQfL0Ij4Iw4x6ZLrC3xIX9bE0FUNbQxbM",
    authDomain: "goalcoach-8138f.firebaseapp.com",
    databaseURL: "https://goalcoach-8138f.firebaseio.com",
    projectId: "goalcoach-8138f",
    storageBucket: "",
    messagingSenderId: "682460651540"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
