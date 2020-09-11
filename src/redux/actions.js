import * as firebase from 'firebase/app'
import 'firebase/database'
import firebaseConfig from '../firebase/firebaseConfig'

firebase.initializeApp(firebaseConfig)
const quotesRef = firebase.database().ref('quotes')
const numberOfQuotes = 101;
const randomIndex = Math.floor(Math.random() * Math.floor(numberOfQuotes));

export function increment(item) {
   return {
      type: "UP_VOTE",
      payload: item
   }
}
export function decrement(item) {
   return {
      type: "DOWN_VOTE",
      payload: item
   }
}
export function refreshQuote() {
   // console.log(item, "IS ITEM HERE?")
   // return {
   //    type: "REFRESH",
   //    payload: item
   // }
   return (dispatch) => {
      quotesRef.orderByKey().equalTo(`${randomIndex}`).on('child_added', (snapshot) => {
         const item = snapshot.val()
         console.log(item, "QUOTE???") 
         dispatch({
            type: "REFRESH",
            payload: item
         })
      })
   }
}