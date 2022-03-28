
import './vendors/bootstrap/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Tuiter from './components/Tuiter';
import Labs from './components/Labs';
import HomeScreen from './components/Tuiter/Home-Screen';
import ExploreScreen from './components/Tuiter/Explore-Screen';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ProfileScreen from './components/Tuiter/Profile-Screen';
import EditProfile from './components/Tuiter/Edit-Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Labs/>}/>
            <Route path="hello"
                   element={<HelloWorld/>}/>
            <Route path="tuiter"
                   element={<Tuiter/>}>
              <Route index
                     element={<HomeScreen/>}/>
              <Route path="explore"
                     element={<ExploreScreen/>}/>
              <Route path="profile" 
                     element={<ProfileScreen/>}/> 
              <Route path="edit-profile" 
                     element={<EditProfile />}/> 
            </Route>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
 }
 

export default App;
