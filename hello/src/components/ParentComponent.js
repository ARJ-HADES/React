import React, { Component } from 'react'
import ChildComponents from './ChildComponents'

 class ParentConpnent extends Component {
     
    
    constructor(props) {
         super(props)
     
         this.state = {
             parentName : 'Parent'    
         }
         this.greetParent =this.greetParent.bind(this)
     }

        greetParent(childName){
            // alert('hello'+ this.state.parentName) this is fine but we use es6 we use template litterals
            alert(`Hello ${this.state.parentName} from ${childName}`) // (` and ${} are features in ES6 ans is not a feature specific to react) 
        }
     
    render() {
        return (
            <div>
                {/* we call a attribute called GreetHandler and we assign greetPaent method */}
                <ChildComponents greetHandler ={this.greetParent} /> 
            </div>
                
        )
    }
}

export default ParentConpnent
