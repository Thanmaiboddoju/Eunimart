import './SocialCard.css';
import { useNavigate} from "react-router-dom";
const Profile = ({ userData }) => {
	
    return (
        <div className="card">
           <div className="card__title">{userData.first_name} {userData.last_name}</div>
           <div className="card_image"><img src={userData.avatar}/></div>
           <div className="email">{userData.email}</div>
			
        </div>
        
    )
};

export default Profile;
