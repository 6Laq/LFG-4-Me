import Vue from 'vue'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import Vuex from 'vuex'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(Vuex)
const firebaseConfig = {
  apiKey: "AIzaSyCePqV2LBACjLa5_cKVXMpeAClJGsHXH0o",
  authDomain: "lfg-forum.firebaseapp.com",
  databaseURL: "https://lfg-forum.firebaseio.com",
  projectId: "lfg-forum",
  storageBucket: "",
  messagingSenderId: "946753627116",
  appId: "1:946753627116:web:ac762c02abe461b74d56c9"
}
const db = firebase.initializeApp(firebaseConfig).firestore()

export default new Vuex.Store({
  state: {
    posts: [],
  },

  mutations: {
    ...vuexfireMutations,
    addPosts(state, posts) {
      state.posts = posts
    }
  },

  actions: {
    addPost: (context, { post }) => {
      console.log(post)
      return db.collection('posts').add(post)
    },
    bindTodosRef: firestoreAction(context => {
      // context contains all original properties like commit, state, etc
      // and adds `bindFirestoreRef` and `unbindFirestoreRef`
      // we return the promise returned by `bindFirestoreRef` that will
      // resolve once data is ready
      return context.bindFirestoreRef('posts', db.collection('posts'))
    }),
  },
})