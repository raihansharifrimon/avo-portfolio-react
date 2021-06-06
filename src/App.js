import './sass/main.css'
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutUs} />
        </Switch>
    </Router>
  );
}

export default App;
