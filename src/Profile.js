import './SocialCard.css';
import {useNavigate} from 'react-router-dom' 
const Profile = ({ userData }) => {
	let navigate=useNavigate();
    return (
    
        <div className="card">
           <div className="card__title">{userData.first_name} {userData.last_name}</div>
           <div className="card_image"><img src={userData.avatar}/></div>
           <div className="email">{userData.email}</div>
	    <div><button onClick={()=>navigate('/SocialCard',{state:{ID:userData.id}})}>Visit profile</button></div>
        </div>
        
    )
};

export default Profile;
