import React, { Component } from 'react'
import store from '../../redux/store'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'
export default class Count extends Component {

    state = {count:0}
    increment  = ()=>{
        const {value} = this.selectNumber
        store.dispatch(createIncrementAction(value*1))
    }
    decrement = ()=>{
        const {value} = this.selectNumber
        store.dispatch(createDecrementAction(value*1))
    }
    incrementIfOdd = ()=>{
        const {value} = this.selectNumber
        const count = store.getState()
        console.log(count)
        if (count % 2 !== 0){
            store.dispatch(createIncrementAction(value*1))
        }
    }
    incrementAsync = ()=>{
        const {value} = this.selectNumber
        store.dispatch(createIncrementAsyncAction(value*1))
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
                <select ref={c=> this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                &nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}
