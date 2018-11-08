import React, { Component } from 'react';
import './App.css';
import TodolistTemplate from './components/TodolistTemplate';
import Form from './components/Form'
import TodoItemList from './components/TodoItemList';

/* 
App.js 기능
1. 데이터를 받음 
2. 데이터를 가져오기떄문에 변경도 여기서 해야됨, 
그래서 함수를 선언하고 함수를 자식클래스가 사용할수 있도록
보내줘야함 
3.자식클래스에서 이벤트 발생하면 랜더를 한번 돌리면서 필요한 기능을 하는 식으로 개발하는듯



*/





// main
// list
// 이미지는 바로 경로를 입력하면 안되고 import해줘야함

class App extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false },
      { id: 1, text: ' 리액트 소개', checked: true },
      { id: 2, text: ' 리액트 소개', checked: false }
    ]
  }

  handleChange = (e) => {
    console.log("handleChange e 확인 : "+e)
    console.log("handleChange e.target.value 확인 : "+e.target.value)
    this.setState({
      input: e.target.value
    });
  }


  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }


  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      console.log("handleKeyPress e 확인"+e)
      this.handleCreate();
    }
  }


  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const selected = todos[index];

    console.log("handleToggle id"+id)
    console.log("handleToggle todos"+todos)
    console.log("handleToggle index"+index)
    console.log("handleToggle selected"+selected)
    
    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...selected,
          checked: !selected.checked
        },
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }


  handleRemove = (id) => {

    const { todos } = this.state;

    console.log("handleRemove id"+id)
    console.log("handleTemove totos"+todos)

    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  
  render() {
    
    const {input, todos} = this.state;
    console.log("render input"+input)
    console.log("render todos"+todos)

    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this

    return (
      <div className="App">
        <TodolistTemplate form={(
          <Form 
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        )}>
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
        </TodolistTemplate>
        

      </div>
    );
  }
}

export default App;
