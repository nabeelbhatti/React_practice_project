import "./App.css";
import ClickCounter from "./components/ClickCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import Counter from "./components/Counter";
import ErrorBoundary from "./components/ErrorBoundary";
import EventBind from "./components/EventBind";
import FocusInput from "./components/FocusInput";
import Form from "./components/Form";
import FragmentDemo from "./components/FragmentDemo";
import FRParent from "./components/FRParent";
import { FunctionClick } from "./components/FunctionClick";
// import { HelloWorld } from './components/HelloWorld';
import { Greek } from "./components/Greek";
import Hero from "./components/Hero";
import HoverCounter from "./components/HoverCounter";
import LifecycleA from "./components/LifecycleA";
import Message from "./components/Message";
import Parent from "./components/Parent";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import StyleSheet from "./components/StyleSheet";
import Table from "./components/Table";
import UserGreeting from "./components/UserGreeting";
// import Welcome from './components/WelCome';
// import { Hello } from './components/Hello';

function App() {
  return (
    <div className="App">
      <ClickCounterTwo />
      <HoverCounter />
      <ClickCounter />
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <FRParent />
      <FocusInput />
      <RefsDemo />
      <ParentComp />
      <Table />
      <FragmentDemo />
      <Form />
      <Greek name="Nabeel" age="25" heroName="Node Js Developer">
        <p>Hello World I am from Greek Children</p>
      </Greek>
      <LifecycleA />
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
