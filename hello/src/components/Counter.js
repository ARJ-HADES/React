// Counter Incrementation
// using "this.setState" in class components


import React, { Component } from 'react'

class Counter extends Component {

constructor(props) {
    super(props)

    this.state = {
         count: 0
    }
}
// basic scenario start
increment(){

    // this.setState({
    //     count:this.state.count + 1 
    // },
    // ()=>{
    //     console.log('callback value', this.state.count)
    // }
    
    // )
// tough scenario start
    this.setState((prevState)=>({
        count: prevState.count + 1 
    }))
    console.log(this.state.count)

}

incrementFive (){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}

// here in oncClick we can change the function to "increment" for normal scenario increment
    render() {
        return (
            <div>
            <div> Count - {this.state.count}</div>
            <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
