import React, { Component } from 'react'

class EventBind extends Component {
    
    
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
// method 3/ simply add a line

        // this.clickkHandler =this.clickkHandler.bind(this)

    }
    // clickkHandler(){
    //     this.setState({
    //         message: "Good Bye !"
    //     })
    //     console.log(this)
    // }
//  method 4 by using arrow function as a class property start

    clickkHandler =()=>{
        this.setState({
            message: 'Good Bye !'
        })
    }


// by using bind event & bind handler in render method 1
    render() {
        return (
            <div>
                <div> {this.state.message} </div>
                {/* <button onClick ={this.clickkHandler.bind(this)}>Click</button> */}

 
 
                {/* by using Arrow Function in the render method 2 */}
                {/* <button onClick ={()=>this.clickkHandler()}>Click</button> */}




                    {/* event handler in constructor as oppossed to binding in render method 3 */}
                    <button onClick ={this.clickkHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
