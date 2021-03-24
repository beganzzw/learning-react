import React, { Component } from 'react'
import './index.css'
import Pubsub from 'pubsub-js/'
export default class List extends Component {

  state = {
    users:[],
    isFirst:true, //是否第一次打开页面
    isLoading:false, //是否处于加载中
    err:'', 
  }

  componentDidMount(){
    Pubsub.subscribe('search',(_,stateObj)=>{
      this.setState({...stateObj})
    })
  }
  render() {
    const {users,isFirst,isLoading,err} = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>输入关键字,随后点击搜索</h2>:
          isLoading ? <h2>Loading...............</h2>:
          err ? <h2>{err}</h2> :
          users.map((userObj)=>{
            return (
              <div key={userObj.id} className="card">
                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                  <img alt="head_portrait" src={userObj.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
