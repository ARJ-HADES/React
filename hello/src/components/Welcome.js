import React, { Component } from 'react'

// class Welcome extends Component{
//     render(){
//         return <h1>{this.props.name} Full Name {this.props.fullName}</h1>
//     }
// }

// destructuring using class componenets first method
class Welcome extends Component{
    render(){
        const{name, fullName} =this.props
        // destructring in state props we use
        // const {state1, state2 }=this.state
        return <h1>{name} Full Name {fullName}</h1>
    }
}
export default Welcome