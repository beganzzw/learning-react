import { ADD_PERSON } from '../constant'
const initPerson = [{ id: '001', name: 'tome', age: 18 }]
export default function personReducer(perState=initPerson, action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...perState]
        default:
            return perState
    }
}