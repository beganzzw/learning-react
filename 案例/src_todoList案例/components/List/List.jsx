import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../item/Item'
import './list.css'
export default class List extends Component {


  static propTypes = {
    updateTodo:PropTypes.func.isRequired
  }
  render() {
    const { todos,updateTodo,deleteTodo } = this.props
    return (
      <ul className="todo-main">
        {
          todos.map((todo)=>{
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
          })
        }
      </ul>
    )
  }
}
