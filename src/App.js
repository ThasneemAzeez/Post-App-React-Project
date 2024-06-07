import logo from './logo.svg';
import './App.css';
import ForntPage from './component/ForntPage';
import FeedPage from './component/FeedPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
     <ForntPage/>
     <FeedPage/>
    </div>
  );
}

export default App;
