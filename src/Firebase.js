import { vuexfireMutations, firestoreAction } from 'vuexfire'
import firebase from 'firebase';
import 'firebase/firestore'

const settings = {timestampsInSnapshots: true};
const db = firebase.initializeApp({ projectId: 'MY PROJECT ID' }).firestore()

const firebaseConfig = {
  apiKey: "AIzaSyCePqV2LBACjLa5_cKVXMpeAClJGsHXH0o",
  authDomain: "lfg-forum.firebaseapp.com",
  databaseURL: "https://lfg-forum.firebaseio.com",
  projectId: "lfg-forum",
  storageBucket: "",
  messagingSenderId: "946753627116",
  appId: "1:946753627116:web:ac762c02abe461b74d56c9"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);
firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

new Vuex.Store({
  state: {
    posts: [],
  },

  mutations: vuexfireMutations,

  actions: {
    bindTodosRef: firestoreAction(context => {
      // context contains all original properties like commit, state, etc
      // and adds `bindFirestoreRef` and `unbindFirestoreRef`
      // we return the promise returned by `bindFirestoreRef` that will
      // resolve once data is ready
      return context.bindFirestoreRef('posts', db.collection('posts'))
    }),
  },
})

export default firebase;