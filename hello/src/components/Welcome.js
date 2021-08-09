import React, { Component } from 'react'

class Welcome extends Component{
    render(){
        return <h1>{this.props.name} Full Name {this.props.fullName}</h1>
    }
}

export default Welcome