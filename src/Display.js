import React from 'react'
function Display({val}){
	return(
	<div>
		<center>
		<div className="card">
           <div className="card__title">{val.first_name} {val.last_name}</div>
           <div className="card_image"><img src={val.avatar}/></div>
           <div className="email">{val.email}</div>
           </div>
		</center>
	</div>
	)
}
export default Display;
