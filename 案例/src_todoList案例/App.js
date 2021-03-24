import React, { Component } from 'react';

import List from './components/List/List'
import Footer from './components/footer/Footer'
import Header from './components/Header/Header'
import './App.css'
class App extends Component {

  state = { todos:[
    {id: '001',name:'吃饭',done:true},
    {id: '002',name:'睡觉',done:true},
    {id: '003',name:'大白发',done:true},
  ]}

  addTodo = (todoObj)=>{
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    this.setState({todos:newTodos})
  }

  updateTodo = (id,done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      if (todoObj.id === id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    this.setState({todos:newTodos})
  }

  checkAllTodo = (flag)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done:flag}
    })
    this.setState({todos:newTodos})
  }

  clearAllDone = ()=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done:false}
    })
    this.setState({todos:newTodos})
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    );
  }
}

export default App;