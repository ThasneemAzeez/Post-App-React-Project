import logo from './logo.svg';
import './App.css';
import ForntPage from './component/ForntPage';
import FeedPage from './component/FeedPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchUser from './component/SearchUser';
import User from './component/User';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<ForntPage/>}/>
      <Route path='/Feeds' element={<FeedPage/>}/>
      <Route path='/Search' element={<SearchUser/>}/>
      <Route path='/Viewall' element={<User/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
