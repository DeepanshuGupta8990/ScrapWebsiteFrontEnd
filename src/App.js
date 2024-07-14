import React from 'react';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import OverView from './pages/OverView';
import SearchButton from './components/SearchButton';
import SearchInput from './components/Searchinput';
import { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const location = useLocation();

  const renderBreadcrumb = () => {
    const path = location.pathname;
    if (path.startsWith('/overview/')) {
      return (
        <Breadcrumb>
          <StyledLink to="/">Home</StyledLink> <Separator>&gt;</Separator> <OverviewText>Overview</OverviewText>
        </Breadcrumb>
      );
    }
    return null;
  };

  return (
    <AppComp>
      <TopComponent>
        <DivComp>
          <SearchInput url={url} setUrl={setUrl} />
          <SearchButton url={url} setUrl={setUrl} />
        </DivComp>
        {renderBreadcrumb()}
      </TopComponent>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview/:dynamicId" element={<OverView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </AppComp>
  );
}

const TopComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 20px 15px;
  background-color: white;
  border-radius: 5px;
`;

const DivComp = styled.div`
  width: calc(100% - 40px);
  height: 82px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  @media (max-width: 650px) {
    flex-direction: column;
    height: auto;
  }
  
  @media (max-width: 500px) {
    height: auto;
    width: 100vw;
  }
`;

const AppComp = styled.div`
  width: 100vw;
`;

const Breadcrumb = styled.div`
  padding: 10px;
  margin: 5px;
  font-size: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #374151; /* Color for Home */
  
  &:hover {
    text-decoration: underline;
  }
`;

const Separator = styled.span`
  color: #9CA3AF; /* Color for the > separator */
  margin: 0 5px;
`;

const OverviewText = styled.span`
  color: #374151; /* Color for Overview */
`;

export default App;
