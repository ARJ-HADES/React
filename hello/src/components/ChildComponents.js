import React from 'react'
// Add props as parameter in ChildComponents
function ChildComponents(props) {
    return (
        <div>
            {/* In button we call onClick props.GreetHandler */}
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}



            <button onClick={()=>props.greetHandler('child')}>Greet Parent</button> {/* passing parameters using arrow function */}
        </div>
    )
}

export default ChildComponents
