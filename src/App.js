import React, {useEffect} from 'react';
import './App.css';
import {connect, useDispatch} from 'react-redux'
import {increment, decrement, refreshQuote} from './redux/actions'
import * as firebase from 'firebase/app'
import 'firebase/database'
import firebaseConfig from './firebase/firebaseConfig'

function App(props) {
  const dispatch = useDispatch()
  dispatch(refreshQuote())

  console.log(props, "STATE")
  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.quote}</h1>
        <h2>{props.author}</h2>
        <h5>{props.upvote}</h5>
        <h5>{props.downvote}</h5>
      </header>
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return state
}
const mapDispatchToProps = { increment, decrement, refreshQuote }

export default connect(mapStateToProps, mapDispatchToProps)(App);
