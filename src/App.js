import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Projects from './Components/Project';
import Contacts from './Components/contact';
import Skills from './Components/skills';

function App() {
  return (
    <main>
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}

export default App;
