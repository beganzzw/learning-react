import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createdAddPersonAction } from '../../redux/actions/person'


class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = { id: nanoid(), name, age }
        this.props.addPerson(personObj)
    }
    render() {
        return (
            <div>
                <h4>当前求和为：{this.props.count}</h4>
                <input ref={c => this.nameNode = c} type="text" placeholder="输入名字" />
                <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄" />
                <button onClick={this.addPerson}>添加</button>
                <div>
                    <ul>
                        {
                            this.props.personObj.map((person) => {
                                return <li key={person.id}>{person.name} --- {person.age}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}


export default connect(
    state => ({ personObj: state.personReducer,count:state.countReducer }),
    {
        addPerson: createdAddPersonAction,
    }
)(Person)