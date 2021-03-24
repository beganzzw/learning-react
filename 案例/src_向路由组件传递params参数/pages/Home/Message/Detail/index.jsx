import React, { Component } from 'react'


const DetailData =[
  {id:'01',content:'呜呜呜呜'},
  {id:'02',content:'啊啊啊啊'},
  {id:'03',content:'啛啛喳喳'},
]

export default class Detail extends Component {
  render() {
    const {id,title} = this.props.match.params
    const findResult = DetailData.find((obj)=>{
      return DetailData.id = id
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
