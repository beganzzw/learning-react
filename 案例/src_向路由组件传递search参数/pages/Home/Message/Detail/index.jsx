import React, { Component } from 'react'
import qs from 'querystring'

const DetailData =[
  {id:'01',content:'呜呜呜呜'},
  {id:'02',content:'啊啊啊啊'},
  {id:'03',content:'啛啛喳喳'},
]

export default class Detail extends Component {
  render() {
    //接受params参数
    // const {id,title} = this.props.match.params  

    //接受search参数
    const {search} = this.props.location
    const {id,title} = qs.parse(search.slice(1))

    const findResult = DetailData.find((obj)=>{
      return obj.id === id
    })

    
    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>CONTEXT:{findResult.content}</li>
        </ul>
      </div>
    )
  }
}
