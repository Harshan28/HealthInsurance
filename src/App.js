import './App.css';
 import LoginPage from './LoginPage';
import Sample from './Sample';
 import SignUpPage from './SignUpPage';
 import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path="/"element={<LoginPage/>}/>
         <Route path="/SignUpPage"element={<SignUpPage/>}/>
         <Route path="/LoginPage"element={<LoginPage/>}/>
         <Route path="/sample" element={<Sample/>}/>
       </Routes>
     </Router>
     </div>
  );
}
export default App;