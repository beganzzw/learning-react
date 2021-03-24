import React, { Component } from 'react'
import {Link, Route,Switch} from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
  state = {
    messageArr:[
      {id:'01',title:'奇迹1'},
      {id:'02',title:'奇迹2'},
      {id:'03',title:'奇迹3'},
    ]
  }
  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((messageObj)=>{
              return (
                <li key={messageObj.id}>
                  {/* 向路由组件传递params参数 */}
                  <Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/* 接受params参数 */}
        <Switch>
          <Route path="/home/message/detail/:id/:title" component={Detail}/>
        </Switch>
      </div>
    )
  }
}
