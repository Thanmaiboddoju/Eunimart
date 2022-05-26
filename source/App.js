import { useState,useEffect } from 'react';
import {BrowserRouter,Route,Routes,useNavigate} from "react-router-dom";
import './App.css';
import ProfilePage from "./ProfilePage";
import Profile from './Profile';
import Routingpages from './Routingpages';
function App() {		
  return (
	<BrowserRouter>
	<ProfilePage/>
  	<Routingpages/>
  	</BrowserRouter>
  );
}

export default App;

