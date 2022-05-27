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
	console.log(id)
	const fetchData=async()=>{
	let obj;
	let val;
		try{
			const response=await axios(`https://reqres.in/api/users/${id}`);
			const data=JSON.stringify(response.data);
			obj=JSON.parse(data);
			val=obj.data;
			setProfiles([val]);
			
			} catch (error) {
			console.log(error.response);
			obj=[];
			}
	
		
	}
	useEffect(()=>{
		fetchData();
	},[])
	
	return(
	<div>
		{profiles.map((user, index) => (
        <Display key={index} val={user} />
        ))}
        </div>
	)
		

}
export default SocialCard;
				
