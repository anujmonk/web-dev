
import './vendors/bootstrap/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Tuiter from './components/Tuiter';
import Labs from './components/Labs';
import HomeScreen from './components/Tuiter/Home-Screen/HomeScreen';
import ExploreScreen from './components/Tuiter/Explore-Screen/ExploreScreen';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container-fluid">
      <Routes>
        <Route path="/hello" element={<HelloWorld />}></Route>
        <Route path="/" element={<Labs />}></Route>
        <Route path="/tuiter" element={<Tuiter />}></Route>
        <Route path="/tuiter/home" element={<HomeScreen/>}/>
        <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
