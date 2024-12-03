'use strict'
import firebase from 'firebase'
firebase.initializeApp({
  apiKey: 'AIzaSyA6ksR2A56iDC8CBfWsg54ftHRETcajjZs',
  authDomain: 'reactflix-487df.firebaseapp.com',
  databaseURL: 'https://reactflix-487df.firebaseio.com',
  projectId: 'reactflix-487df',
  storageBucket: 'reactflix-487df.appspot.com',
  messagingSenderId: '35557299762'
})
const db = firebase.database()
export { db }
