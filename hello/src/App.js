import './App.css';
import Greet from './components/greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentConpnent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
function App() {
  return (
    <div className="App">
      <UserGreeting />
      {/* <ParentConpnent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Message />
      <Counter /> */}
     {/* <Greet name="Arjun" fullName="Arjun vinod">
       <p>
         His age is 25 props
       </p>
     </Greet>
     <Greet name="Shabeel" fullName="Muhammed Shabeel">
       <button>Click Me</button>
     </Greet> */}
     {/* <Greet name="Goku" fullName="Gokul Krishna"/>
     <Welcome name="Lalu" fullName="Sourabh Aniyeri"/>
     <Welcome name="Savya" fullName="Savayasach"/>
     <Welcome name="Sreekuttan" fullName="Sreehari"/> */}
     {/* <Hello /> */}
    </div>
  );
}

export default App;
