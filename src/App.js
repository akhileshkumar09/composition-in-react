import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PagesMenu from './pages/PagesMenu';
import WelcomeDialog from './components/WelcomeDialog';
import Card from './components/Card';
import PageLayout from './components/PageLayout';
import Form from './components/Form';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
      <Route path='/' element={<PagesMenu/>}/>
      <Route path='/welcome-dialog' element={<WelcomeDialog/>}/>
      <Route path='/card' element = {<Card/>}/>
      <Route path='/page-layout' element = {<PageLayout/>}/>
      <Route path='/form' element = {<Form/>}/>
      <Route path='/widget-dashboard' element = {<Dashboard/>}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
