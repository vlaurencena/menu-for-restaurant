import './App.css';
import Login from './Login';
import Menu from './Menu';
import Search from './Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import Layout from './Layout';
import { CustomProvider } from "./context/MenuContext";

// TODO HIDE API KEY

function App() {

  const [token, setToken] = useState();

  useEffect(() => {
    setToken("12");
  }, []);

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
      <CustomProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Menu />} />
            <Route path="/search-dishes" element={<Search />} />
          </Route>
        </Routes>
      </CustomProvider>
    </BrowserRouter >
  );
}



export default App;
