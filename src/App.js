import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainNavbar from './components/main/MainNavbar';
import MainContents from './components/main/MainContents';
import MainFooter from './components/main/MainFooter';

function App() {
  return (
    <div className="App">
      <MainNavbar />

      <Routes>
        <Route path="/" element={<MainContents />}></Route>
      </Routes>

      <MainFooter />
    </div>
  );
}

export default App;
