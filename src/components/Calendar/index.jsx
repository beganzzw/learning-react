
import React, { Component } from 'react'
import './index.css'
export default class Calendar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weekObj: ['一', '二', '三', '四', '五', '六', '日',],
            dayArr: []
        };
    }
    isLeapYear(year) {
        return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)
    }

    getMonthCount = (year, month) => {
        let arr = [
            31, null, 31, 30,
            31, 30, 31, 31,
            30, 31, 30, 31
        ];
        let count = arr[month] || (this.isLeapYear(year) ? 29 : 28);
        return Array.from(new Array(count), (item, value) => value + 1);
    };
    getWeekday(year, month) {
        let date = new Date(year, month-1, 1);
        return date.getDay();
    }
    getPreMonthCount(year, month) {
        if (month === 0) {
            return this.getMonthCount(year - 1, 11)
        } else {
            return this.getMonthCount(year, month - 1)
        }
    }
    getNextMonthCount(year, month) {
        if (month > 11) {
            return this.getMonthCount(year + 1, 0)
        } else {
            return this.getMonthCount(year, month + 1)
        }
    }
    updateCalendar(year, month, day) {
        if (typeof year === 'undefined' && typeof month === 'undefined' && typeof day === 'undefined') {
            var date = new Date()
            year = date.getFullYear()
            month = date.getMonth() + 1
            day = date.getDate()
        }
        var res = []
        var preArr = []
        var currentMonth = this.getMonthCount(year, month - 1)
        var preMonth = this.getPreMonthCount(year, month - 2)
        var nextMonth = this.getNextMonthCount(year, month + 1)
        let whereMonday = this.getWeekday(year, month)
        whereMonday -= 1
        if (whereMonday < 0){
            whereMonday = 6
        }
        if(whereMonday !== 0){
            preArr = preMonth.slice(-1 * whereMonday)
        } 
        console.log(whereMonday, 'ssss')
        // preArr = preMonth.slice(-1 * whereMonday)
        var nextArr = nextMonth.slice(0, 42 - currentMonth.length - whereMonday);
        var perArrObj = []
        var Obj = {}
        preArr.forEach(item => {
            Obj = {
                day: item,
                type: 'pre'
            }
            perArrObj.push(Obj)
        })
        var nextArrObj = []
        nextArr.forEach(item => {
            Obj = {
                day: item,
                type: 'next'
            }
            nextArrObj.push(Obj)
        })
        var curtArrObj = []
        currentMonth.forEach(item => {
            Obj = {
                day: item,
                type: 'cur',
                now: item === day ? 0 : 1,
                first:item === 1 ? 0 :1
            }
            curtArrObj.push(Obj)
        })
        res = [].concat(perArrObj, curtArrObj, nextArrObj)
        this.setState({
            dayArr: res,
            currentY:year,
            currentM: month,
            currentD: day
        })
    }
    componentDidMount() {
        this.updateCalendar()
    }
    getNowYear(year,month) {
        console.log(year,month,'getNowYear')
        if (month === 0) {
            return { year: year - 1, month: 12 }
        } else if (month > 12) {
            return { year: year + 1, month: 1 }
        } else {
            return { year: year, month: month }
        }
    }
    goPreMonth = () => {
        const { currentY,currentM, currentD } = this.state
        const { year, month } = this.getNowYear(currentY,currentM - 1)
        this.setState({currentY:year,currentM:month})
        this.updateCalendar(year, month, currentD)
    }
    goNextMonth = () => {
        const { currentY,currentM, currentD } = this.state
        const { year, month } = this.getNowYear(currentY,currentM + 1)
        this.setState({currentY:year,currentM:month})
        this.updateCalendar(year, month, currentD)
    }
    render() {
        return (
            <div className="warrper">
                <div className="select-month">
                    <button className="select-month-btn" onClick={this.goPreMonth}>上个月</button>
                    <div className="select-month-title">{this.state.currentY}年{this.state.currentM}月</div>
                    <button className="select-month-btn" onClick={this.goNextMonth}>下个月</button>
                </div>
                <div className="select-week">
                    {
                        this.state.weekObj.map((item, index) => {
                            return <div key={index} className="week">{item}</div>
                        })
                    }
                </div>
                <div className="select-day">
                    {
                        this.state.dayArr.map((item, index) => {
                            return <div style={
                                {
                                    color: item.type === 'cur' ? item.now === 0 ? 'red' :  item.first === 0 ? 'blue': 'black' : 'gray'
                                }
                            } key={index} className="day">{item.day}</div>
                        })
                    }
                </div>
            </div>
        )
    }
}
