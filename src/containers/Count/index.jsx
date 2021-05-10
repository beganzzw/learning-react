import CountUI from '../../components/Count'
import { connect } from 'react-redux'
import {
    createIncrementAction,
    createDecrementAction, 
    createIncrementAsyncAction
} from '../../redux/count_action'

function mapStateToProps(state) {
    return { count: state }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: number => dispatch(createIncrementAction(number)),
        decrement: number => dispatch(createDecrementAction(number)),
        incrementAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

