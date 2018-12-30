import React, { Component } from 'react';
import './App.css';
import  Header from "./container/Header"
import  MainBox from "./container/main"
import {connect} from 'react-redux'


class App extends Component {
  render() {
    return (
      <div>
       <Header />
        <MainBox />
      </div>
    );
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(App);
