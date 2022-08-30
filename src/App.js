import "./App.css";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import Form from "./components/Form";
import { FunctionClick } from "./components/FunctionClick";
// import { HelloWorld } from './components/HelloWorld';
import { Greek } from "./components/Greek";
import LifecycleA from "./components/LifecycleA";
import Message from "./components/Message";
import Parent from "./components/Parent";
import StyleSheet from "./components/StyleSheet";
import UserGreeting from "./components/UserGreeting";
// import Welcome from './components/WelCome';
// import { Hello } from './components/Hello';

function App() {
  return (
    <div className="App">
      <Form/>
      <Greek name="Nabeel" age="25" heroName="Node Js Developer">
        <p>Hello World I am from Greek Children</p>
      </Greek>
      <LifecycleA/>
      <UserGreeting />
      <StyleSheet primary={true} />
      <Greek name="Talhas" age="38" heroName="Angualar Developer">
        <span>Hello World</span>
      </Greek>
      <Message />
      <Parent />
      <FunctionClick />
      <EventBind />
      <Counter />
      {/* <HelloWorld/>
      
      <Welcome/>
      <Hello/> */}
    </div>
  );
}

export default App;
