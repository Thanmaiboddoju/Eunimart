import logo from './logo.svg';
import { useState,useEffect } from 'react';
import './App.css';
import SocialCard from "./SocialCard";


function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
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
      setUsers(userData);
 })();
  }, []);		
  return (
  
    <div className="App">
      <div className="cards-container">

      {users.map((user, index) => (
        <SocialCard key={index} userData={user} />
        ))}
        </div>
      </div>
  );
}

export default App;

