export const initialState = {
   quote: [
   // need to pull this from firebase somehow upon load/when next quote selected

   //    author: '',
   //    quote: '',
   //    upvote: 0,
   //    donvote: 0
   ] 
}

export default function reducer(state = initialState, action) {  
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
      case "REFRESH": 
         return state = action.payload
      default:
         return state
   }
} 