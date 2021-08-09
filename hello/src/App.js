import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
     <Greet name="Arjun" fullName="Arjun vinod">
       <p>
         His age is 25 props
       </p>
     </Greet>
     <Greet name="Shabeel" fullName="Muhammed Shabeel">
       <button>Click Me</button>
     </Greet>
     <Greet name="Goku" fullName="Gokul Krishna"/>
     <Welcome name="Lalu" fullName="Sourabh Aniyeri"/>
     <Welcome name="Savya" fullName="Savayasach"/>
     <Welcome name="Sreekuttan" fullName="Sreehari"/>
     {/* <Hello /> */}
    </div>
  );
}

export default App;
