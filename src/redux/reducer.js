export const initialState = {
   quote: [
   // need to pull this from firebase somehow upon load/when next quote selected

   //    author: '',
   //    quote: '',
   //    upvote: 0,
   //    donvote: 0
    ] 
}
console.log(initialState, "INITIAL")
export default function reducer(state = initialState, action) {  
console.log(state, "state outside")
   switch(action.type) {
      case "UP_VOTE":
         return {
            ...state,
            upvote: state.upvote + 1
         }
      case "DOWN_VOTE":
            return {
               ...state,
               downvote: state.downvote - 1
            }
      case "REFRESH": console.log(action.payload, "PAYLOAD")
            console.log(state, "STATE INSIDE")
         return state = action.payload
      default:
         return state
   }
} 