import './SocialCard.css';
const SocialCard = ({ userData }) => {
	function submit() {
	 }
    return (
        <div className="card">
           <div className="card__title">{userData.first_name} {userData.last_name}</div>
           <div className="card_image"><img src={userData.avatar}/></div>
           <div className="email">{userData.email}</div>
			<div><button onclick="submit()"> visit profile </button> </div>
        </div>
    )
};

export default SocialCard;
