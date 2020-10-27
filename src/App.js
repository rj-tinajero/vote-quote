import React, {useState} from 'react';
import './App.css';
import {connect, useDispatch} from 'react-redux'
import {increment, decrement, refreshQuote} from './redux/actions'
import 'firebase/database'

function App(props) {
  const dispatch = useDispatch()
  dispatch(refreshQuote())

  function refreshPage() {
    window.location.reload(false)
  }

  return (
    <div className="App">
      <nav className="navbar nav-color">
        <div className="main-title" onClick={refreshPage}>Vote-Quote</div>
        
      </nav>

      <div className="App-header">
        <div className="container flex">
          <h1>{`"${props.quote}"`}</h1>
          <h2>-{props.author}</h2>

         
            <div className="row">
              <div className="col-sm">
                <h5>{props.upvote}</h5>
                <i onClick={() => dispatch(increment(props))} className="far fa-thumbs-up fa-2x"></i>
              </div>
              <div className="col-sm">
                <h5>{props.downvote}</h5>
                <i onClick={() => dispatch(decrement(props))} className="far fa-thumbs-down fa-2x"></i>
              </div>
            </div>
            <button className="btn btn-outline-dark" onClick={refreshPage}>Click here for new quote!!!</button>
          
        </div>
        
        
        
        
      </div>
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return state
}
const mapDispatchToProps = { increment, decrement, refreshQuote }

export default connect(mapStateToProps, mapDispatchToProps)(App);
