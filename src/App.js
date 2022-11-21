import React from 'react';
import RoutesSidebar from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import './styles/_main.scss';
import { BrowserRouter } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { setClientToken } from "./spotify";
import Login from "./auth/login"

function App() {
    
    const [token, setToken] = useState("");
    localStorage.removeItem('token');
    useEffect(() => {
      const token = window.localStorage.getItem("token");
      const hash = window.location.hash;
      window.location.hash = "";
      if (!token && hash) {
        const _token = hash.split("&")[0].split("=")[1];
        window.localStorage.setItem("token", _token);
        setToken(_token);
        setClientToken(_token);
      } else {
        setToken(token);
        setClientToken(token);
      }
    }, []);
  return !token ? (
    <Login />
  ) : (
    <BrowserRouter>
    <CoreLayout>
      <RoutesSidebar />
    </CoreLayout>
    </BrowserRouter>
  )
}

export default App;