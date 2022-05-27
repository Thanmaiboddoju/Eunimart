import React from 'react';
import axios from 'axios';
import {useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import Profile from './Profile';
import Display from './Display';
const SocialCard=()=>{
	const [profiles,setProfiles]=useState([]);
	const location=useLocation();
	
	const id=location.state.ID;
	var fname,lname,emailid;
	console.log(id)
	const fetchData=async()=>{
	let obj;
		try{
			
			console.log(id)
			const response=await axios(`https://reqres.in/api/users/${id}`);
			const data=JSON.stringify(response.data);
			obj=JSON.parse(data);
			
			sessionStorage.setItem("fname",obj.data.first_name);
			sessionStorage.setItem("lname",obj.data.last_name);
			sessionStorage.setItem("emailid",obj.data.email);
			setProfiles(response.data);
			console.log(profiles)
			
			} catch (error) {
			console.log(error.response);
			obj=[];
			}
	
		
	}
	useEffect(()=>{
		fetchData();
	},[])
	
	return(
		<Display />
	)
		

}
export default SocialCard;
				
