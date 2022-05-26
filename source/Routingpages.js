import React from 'react'
import {BrowserRouter as Router,Route,Routes,useNavigate} from "react-router-dom";
import axios from 'axios';
import './App.css';
import './SocialCard.css';
import SocialCard from "./SocialCard";
import ProfilePage from "./ProfilePage";
import Profile from './Profile';
import Display from './Display.js';

const Routingpages=()=>{
	return(
		<Routes>
			<Route path='/ProfilePage' element={<ProfilePage/>}/>
			<Route path='/SocialCard' element={<SocialCard/>}/>
			<Route path='/Display' element={<Display />}/>			
		</Routes>
	)
}
export default Routingpages


