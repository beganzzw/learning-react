import { connect } from 'react-redux'
import {
    createIncrementAction,
    createDecrementAction, 
    createIncrementAsyncAction
} from '../../redux/count_action'
import React, { Component } from 'react'

//定义UI组件
class Count extends Component {

    state = { count: 0 }
    increment = () => {
        const { value } = this.selectNumber
        this.props.increment(value * 1)
    }
    decrement = () => {
        const { value } = this.selectNumber
        this.props.decrement(value * 1)
    }
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.increment(value * 1)
        }

    }
    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.incrementAsync(value * 1,1000)
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={c => this.selectNumber = c}>
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




//优化
export default  connect(
    state =>({count:state}),
    //一般写法
    /* dispatch =>(
        {
            increment: number => dispatch(createIncrementAction(number)),
            decrement: number => dispatch(createDecrementAction(number)),
            incrementAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
        }
    )
    */
    //简写
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsyncAction,
    }
)
(Count)

