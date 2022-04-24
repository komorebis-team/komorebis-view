import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './index.css';
import App from './App';
import SearchRecording from './components/SearchRecording.jsx'
import UsersCatalogue from "./components/UsersCatalogue.jsx";
import TagsCatalogue from "./components/TagsCatalogue.jsx";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/admin" element={<App/>}>
                  <Route path="search" element={<SearchRecording/>}/>
                  <Route path="record" element={<App/>}/>
                  <Route path="users" element={<UsersCatalogue />}/>
                  <Route path="tags" element={<TagsCatalogue />}/>
                  <Route path="statistics" element={<App/>}/>
                  <Route path="settings" element={<App/>}/>
              </Route>
              <Route path="*" element={() => <div> Nothing here :( </div>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
