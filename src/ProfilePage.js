import React from 'react';
import {useEffect,useState} from 'react';
import './SocialCard.css';
import Profile from './Profile';
import SocialCard from './SocialCard';

function ProfilePage(){
	const [profiles,setProfiles]=useState([]);
	useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://reqres.in/api/users");
        userData = (await response.json()).data;
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setProfiles(userData);
      console.log(userData);
 })();
  }, []);
	
	return(
		<div className="ProfilePage">
      <div className="cards-container">
      {profiles.map((user, index) => (
        <Profile key={index} userData={user} />
        ))}
        </div>
      </div>
	)
		
}
export default ProfilePage;
