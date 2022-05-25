import React from 'react';
import {useEffect,useState} from 'react';
import './SocialCard.css';
import Profile from './Profile';
import SocialCard from './SocialCard';
const ProfilePage=({ userData })=>{
	const [profiles,setProfiles]=useState([]);
	useEffect(() => {
    (async () => {
      let userData;
      try {
      const id=userData.id
        const response = await fetch("https://reqres.in/api/users/${id}");
        userData = (await response.json()).data;
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setProfiles(userData);
 })();
  }, []);
	
	return(
		<div className="App">
      <div className="cards-container">

      {profiles.map((user, index) => (
        <Profile key={index} userData={user} />
        ))}
        </div>
      </div>
	)
		
}
export default ProfilePage;
