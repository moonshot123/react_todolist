import React, { Component } from 'react';
import './App.css';
import TodolistTemplate from './components/TodolistTemplate';
import Form from './components/Form'

// main
// list
// 이모티콘 그냥 이미지 넣기 하면 들어감....

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodolistTemplate form={<Form/>}>
        템프릿완성
        </TodolistTemplate>
      

      </div>
    );
  }
}

export default App;
