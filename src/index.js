import "amazon-connect-streams";

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './components/App';
import Login from './components/Login'
import SearchRecording from './components/Search/SearchRecording.jsx'
import UsersCatalogue from "./components/UsersCatalogue.jsx";
import TagsCatalogue from "./components/TagsCatalogue.jsx";
import reportWebVitals from './reportWebVitals';
import {AuthProvider} from "./components/Auth/AuthProvider";
import RequireAuth from "./components/Auth/RequireAuth";

import Settings from './components/Settings';
import Record from "./components/Record";
import SupervisorInfo from "./components/SupervisorDetails/SupervisorInfo";
import Statistics from "./components/Statistics";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <AuthProvider>

              <Routes>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/admin" element={
                      <RequireAuth role="admin">
                          <App/>
                      </RequireAuth>
                  }>
                      <Route path="search" element={<SearchRecording/>}/>

                      <Route path="users" element={<UsersCatalogue />}/>
                      <Route path="users/supervisorInfo" element={<SupervisorInfo/>}/>
                      <Route path="tags" element={<TagsCatalogue />}/>

                      <Route path="statistics" element={<Statistics/>}/>
                      <Route path="settings" element={<Settings/>}/>

                  </Route>
                  <Route path="/agent" element = {
                      <RequireAuth role="agent">
                          <App/>
                      </RequireAuth>
                  }>
                      <Route path="search" element={<SearchRecording/>}/>
                      <Route path="record" element={<Record/>}/>
                  </Route>
                  <Route path="*" element={() => <div> Nothing here :( </div>}/>
              </Routes>

          </AuthProvider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
