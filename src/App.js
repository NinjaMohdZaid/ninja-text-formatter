// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';


function App() {
  return (
   <>
     <NavBar title="Ninja Text Formatter"/>
     <div className="container">
      <TextForm heading="Enter Your text to analyze below"/>
     </div>
   </>
  );
}

export default App;
