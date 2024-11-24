import React, { Component } from "react";
import { add5Increment, addFun, lessFun } from "./Feature/BasicSlice"
import { connect } from "react-redux";
export class AppClassCom extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <h1>Class Compoennt Redux</h1>
                <button onClick={()=> this.props.addFun()}>Add (+)</button>
                <button onClick={()=> this.props.lessFun()}>Less (-)</button>
                <button onClick={()=> this.props.add5Increment(5)}>Add (+5)</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state ", state);
    return {
        count: state.basic.val
    }
}
const mapDispatchToProps = {
    add5Increment, addFun, lessFun
}
export default connect(mapStateToProps, mapDispatchToProps)(AppClassCom)