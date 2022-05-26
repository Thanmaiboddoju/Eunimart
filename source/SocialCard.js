import React from 'react';
import axios from 'axios';
import {useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import Profile from './Profile';
import Display from './Display';
const SocialCard=()=>{
	const [profiles,setProfiles]=useState([]);
	const location=useLocation();
	const id=location.state.ID
	var fname,lname,emailid;
	console.log(id)
	const fetchData=async()=>{
		try{
			const response=await axios(`https://reqres.in/api/users/${id}`);
			
			const data=JSON.stringify(response.data);
			var obj=JSON.parse(data);
			sessionStorage.setItem("fname",obj.data.first_name);
			sessionStorage.setItem("lname",obj.data.last_name);
			sessionStorage.setItem("emailid",obj.data.email);
			setProfiles(obj);
			console.log(profiles);
		}
		catch(error){
			console.log(error.response);
		}
	}
	useEffect(()=>{
		fetchData();
	},[])
	
	return(
		<Display/>
	)
		

}
export default SocialCard;
				
