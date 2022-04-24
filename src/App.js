import React from 'react'
import './App.css';
import NavBarButton from "./components/NavBarButton";
import Header from './components/Header.jsx';
import { Link, Outlet} from "react-router-dom";


function App() {
    const linkStyle = { textDecoration: 'none', color:'white' }
  return (
      <div className="App">
          <Header/>
          <nav className="mainNavbar">
              <div>
                  <Link to="/admin/search" style={linkStyle}>
                      <NavBarButton name="Search"/>
                  </Link>
                  <Link to="/admin/record" style={linkStyle}>
                      <NavBarButton name="Record"/>
                  </Link>
                  <Link to="/admin/users" style={linkStyle}>
                      <NavBarButton name="Users"/>
                  </Link>
                  <Link to="/admin/tags" style={linkStyle}>
                      <NavBarButton name="Tags"/>
                  </Link>
                  <Link to="/admin/statistics" style={linkStyle}>
                      <NavBarButton name="Statistics"/>
                  </Link>
                  <Link to="/admin/settings" style={linkStyle}>
                      <NavBarButton name="Settings"/>
                  </Link>
              </div>
              <div>
                  <NavBarButton name="Help"/>
              </div>
          </nav>
          <Outlet/>
      </div>
  );
}

export default App;
