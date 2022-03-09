
import './vendors/bootstrap/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Tuiter from './components/Tuiter';
import Labs from './components/Labs';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/hello" element={<HelloWorld />}></Route>
        <Route path="/" element={<Labs />}></Route>
        <Route path="/tuiter" element={<Tuiter />}></Route>
    </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
