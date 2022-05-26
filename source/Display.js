import React from 'react'
var fname=sessionStorage.getItem("fname")
var lname=sessionStorage.getItem("lname")
var email=sessionStorage.getItem("emailid")
function Display(){
	return(
	<div>
		<center>
		<h1>{fname}</h1>
		<h1>{lname}</h1>
		<h2>{email}</h2>
		</center>
	</div>
	)
}
export default Display;
