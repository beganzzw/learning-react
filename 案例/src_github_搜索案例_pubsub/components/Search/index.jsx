import React, { Component } from 'react'
import axios from 'axios'
import Pubsub from 'pubsub-js/'
export default class Search extends Component {

  handleSearch = ()=>{
    // 连续结构赋值+重命名
    const {keyWordElement:{value:keyWord}} = this
    console.log(keyWord)

    // this.props.updateAppState({isFirst:false,isLoading:true})
    Pubsub.publish('search',{isFirst:false,isLoading:true})
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      response=>{
        Pubsub.publish('search',{isLoading:false,users:response.data.items})
        // this.props.updateAppState({isLoading:false,users:response.data.items})
        console.log('成功了');
      },
      error=>{
        Pubsub.publish('search',{isLoading:false,err:error.message})
        // this.props.updateAppState({isLoading:false,err:error.message})
        console.log('失败了',error)
      }
    )
    
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
          <button onClick={this.handleSearch}>搜索</button>
        </div>
      </section>
    )
  }
}
