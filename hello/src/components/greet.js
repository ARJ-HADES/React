import React from 'react'

// function Greet(){
//     return <h1> Hello Arjun !</h1>

// }

// const Greet = props =>{
//     console.log(props) 
// return (
// <div>
// <h1>Hello {props.name} aka {props.fullName}</h1>
// {props.children}
// </div>
// )
// }
// destructuring using functional components first method
// const Greet = ({name, fullName}) =>{
    
// return (
// <div>
// <h1>Hello {name} aka {fullName}</h1>

// </div>
// )
// }
// destructuring using functional components first method end


// destructuring using functional components second method
const Greet = props =>{
    const{name, fullName}= props
    return (
    <div>
    <h1>Hello {name} aka {fullName}</h1>
    
    </div>
    )
    }
    // destructuring using functional components second method
export default Greet