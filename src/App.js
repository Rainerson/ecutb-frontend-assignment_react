import './App.css';
import Navbar from './components/Navbar.js';

function App() {
  return (
    // Kallas för en fragment när det bara är taggar (?), allt måste vara inom denna (ett parent-element)
    <>
        <Navbar></Navbar>
    </>
  );
}

export default App;

// OBS! När du gör ett html element med en class måste du nu skriva className istället för class
