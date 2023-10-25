import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainNavbar from './components/main/MainNavbar';
import MainContents from './components/main/MainContents';
import MainFooter from './components/main/MainFooter';

function App() {
  return (
    <>
      <MainNavbar />

      <Routes>
        <Route path="/" element={<MainContents />}></Route>
      </Routes>

      <MainFooter />
    </>
  );
}

export default App;
