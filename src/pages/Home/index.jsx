import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'
import { Redirect, Route, Switch } from 'react-router'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news" >News</MyNavLink>
              {/* <a class="list-group-item active" href="./home-news.html">News</a> */}
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
              {/* <a class="list-group-item " href="./home-message.html">Message</a> */}
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News}></Route>
            <Route path="/home/message" component={Message}></Route>
            <Redirect to="/home/news"/>
          </Switch>
        </div>
      </div>
    )
  }
}
