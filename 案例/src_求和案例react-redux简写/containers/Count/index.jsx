import CountUI from '../../components/Count'
import { connect } from 'react-redux'
import {
    createIncrementAction,
    createDecrementAction, 
    createIncrementAsyncAction
} from '../../redux/count_action'


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
(CountUI)

