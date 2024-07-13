import Home from './pages/Home';
import NotFound from './pages/NotFound';
import OverView from './pages/OverView';
import { Route, Routes } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import SearchButton from './components/SearchButton';
import { useState } from 'react';
import SearchInput from './components/Searchinput'
import styled from 'styled-components';

function App() {
  const [url,setUrl] = useState('');
  return (
    <>
    <TopComponent>
      <SearchInput url={url} setUrl={setUrl}/>
      <SearchButton  url={url}  setUrl={setUrl}/>
    </TopComponent>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/overview/:dynamicId" element={<OverView/>}></Route>
        <Route path="*"  element={<NotFound/>}></Route>
      </Routes>
      <ToastContainer/>
    </>
  );
}

const TopComponent = styled.div`
    width: calc(100% - 40px);
    height: 82px;
    padding: 20px 15px 20px 15px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    background-color: white;
    margin: 5px;
    border-radius: 5px;
`

export default App;
