import React, { Component } from 'react';
import './App.css';
import TodolistTemplate from './components/TodolistTemplate';
import Form from './components/Form'
import TodoItemList from './components/TodoItemList';



// main
// list
// 이모티콘 그냥 이미지 넣기 하면 들어감....

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
      this.handleCreate();
    }
  }


  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const selected = todos[index];

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
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  
  render() {

    const {input, todos} = this.state;

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
