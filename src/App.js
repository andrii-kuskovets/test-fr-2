import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Steps from "./components/steps/Steps";
import Phone from "./components/phone/Phone";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Banner></Banner>
        <Steps></Steps>
        <Phone></Phone>

    </div>
  );
}

export default App;
