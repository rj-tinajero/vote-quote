import * as firebase from 'firebase/app'
import 'firebase/database'
import firebaseConfig from '../firebase/firebaseConfig'

firebase.initializeApp(firebaseConfig)
const quotesRef = firebase.database().ref('quotes')
const numberOfQuotes = 101;
const randomIndex = Math.floor(Math.random() * Math.floor(numberOfQuotes));

export function increment(item) { console.log(randomIndex, "index")
   return (dispatch) => {
      firebase.database().ref(`/quotes/${randomIndex}`).set({
         author: item.author,
         quote: item.quote,
         upvote: item.upvote + 1,
         downvote: item.downvote
      })
      dispatch({
         type: "UP_VOTE"
      })
   }
}
export function decrement(item) { console.log(randomIndex, "index") 
   return (dispatch) => {
      firebase.database().ref(`/quotes/${randomIndex}`).set({
         author: item.author,
         quote: item.quote,
         upvote: item.upvote,
         downvote: item.downvote - 1
      })
      dispatch({
         type: "DOWN_VOTE"
      })
   }
}
export function refreshQuote() {
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