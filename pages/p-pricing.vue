<template>
    <main>
		<div>
			<h2>
				<h1 align="left">Pricing:</h1>
				<br>
				Galaga’s Peppermint Project is not yet patented nor protected by copyright law. 
				Peppermint Project is not yet designed to be distributed, sold or marketed. 
				Galaga’s Peppermint Project is property of Galaga team members (Agner Gomes Junior, Beatriz Ricardo, Kay “Kristin” Rubio, Sandy Lord, and Taylor Jackman). 
				Under the direct delegation of Framingham State University, Peppermint Project will be properly assessed for fair compensation of Galaga team members, 
				before it may be approved for profit and market. 
				<br><br>
				Very truly yours,
				<br>
				Team Galaga. 
			</h2>
			<img id="threepandas" src="images/threepandas.png" />
		</div>
    </main>
</template>

<script>
export default {

}
</script>

<style scoped>
body{
	background-color: #C3ECDC;
	font-family: Arial, Verdana, sans-serif;
}

a{
	color: #2C8C67;
	text-decoration: underline;
}

h2 {
	color: #2C8C67;
	width: 100%;
	border-radius: 5px;
	padding: 5px 10% 5px 10%;
	text-align: left;
}

/********************* index page ***************/
/* Top row where it says Welcome to*/
.row1 {
	float: left;
	width: 100%;
	padding: 0px;
	margin: 0px;
	background-color: #C3ECDC;
}

.row1>h2 {
	
	font-weight: normal;
	color: #2C8C67;
	float: left;
	margin: 20px 0% 1px 15%;
	padding: 0px;
	background-color: #C3ECDC;
	animation-duration: 1s;
	animation-name: appear;
}

.row1>a{
	float: right;
	margin: 30px 3% 0px 0%;
}

.row1>a:hover{
	font-size: 110%;
	margin: 29px 2.8% 0px 0%;
}

/* Second row which includes Peppermint logo,
   panda, login box */
.row2 {
	float: left;
	width: 100%;
	padding: 0px;
	margin: 0px;
	background-color: #C3ECDC;
}

#logo {
	float: left;
	padding: 10px 0% 0px 0%;
	/*animation: 2s ease-in 0s mymove 1s;
	animation-fill-mode: both;
	animation: mymove 5s infinite; */
	animation-duration: 2s;
	animation-name: bounceIn;
}

p{
font-size: 120%;
	font-family: Arial, Verdana, sans-serif;
}

#loginbox{
	float: left;
	width: 25%;
	padding: 0px;
	border-width: 2px 2px 2px 2px;
	border-style: solid;
	border-color: #2C8C67;
	background-color: #2C8C67;
	border-radius: 5px;
}

#bottom{border-bottom-left-radius: 5px;}

#logo_panda {
	float: left;
}

/* Style for bigger TV/Computer screen */
@media (min-width: 1000px) {
	.row1>h2 {font-size: 200%;}
	#logo {width: 50%;}
	#loginbox{
		margin: 80px 0% 80px 33%;
		min-width: 350px;
	}
	#logo_panda {
		width: 20%;
		padding: 80px 0% 0px 0%;
		animation-duration: 4s;
		animation-name: appear2;
	}
	input{font-size: 100%;}
	#col1 {
		min-width: 100px;}
	#col2 {
		min-width: 240px;
		width: 68%;
	}
	.row3>p {font-size: 80%;}
}

/* Style for medium iPad-size screen */
@media (max-width: 1000px) {
	.row1>h2 {font-size: 200%;}
	#logo {width: 50%;}
	#loginbox{
		margin: 20px 0% 20px 20%;
		min-width: 350px;
	}
	#logo_panda {
		width: 20%;
		padding: 40px 0% 0px 0%;
	}
	input{font-size: 100%;}
	#col1 {
		min-width: 100px;}
	#col2 {
		min-width: 240px;
		width: 68%;
	}
	.row3>p {font-size: 80%;}
}

/* Style for very small screens */
@media (max-width: 610px) {
	.row1>h2 {font-size: 100%;}
	#logo {width: 80%;}
	#loginbox{
		margin: 5px 0% 0px 0%;
		min-width: 200px;
		width: 98%;
	}
	#logo_panda {
		display:none;
	}
	input{font-size: 60%;}
	#col1 {
		min-width: 60px;}
	#col2 {
		min-width: 80px;
		width: 50%;
		border-color: purple;
	}
	.row3>p {font-size: 50%;}
}

/* Login, Register, Forgot Password */
#col1{
	float: left;
	width: 30%;
	padding: 0px;
	border-width: 0px 2px 0px 0px;
	border-style: solid;
	border-color: #2C8C67;
	margin: 0px;
}

#col1>p{
	text-align: center;
	padding: 20px 0px 20px 0px;
	margin: 0px;
	font-size: 90%;
	/*height:90px;*/
}

p.active{
	color: white;
	background-color: #2C8C67;
}

p.inactive{
	color: #2C8C67;
	background-color: white;
}

p.inactive:hover{
	color: white;
	background-color:#2C8C67;
}

a.inactive:hover{
	color: white;
	background-color:#2C8C67;
}

/* Username/Password */
#col2 {
	float: left;
	padding: 0px;
	margin: 5px 0% 0px 0%;
}

form>p{
	font-size: 80%;
	float: left;
	color: white;
	width: 80%;
	text-align: left;
	margin: 20px 5% 0px 5%;
}

input{
	float: left;
	margin: 0px 5% 0px 5%;
	border-radius: 5px;
}

input#login{
	padding: 5px 10px 5px 10px;
	font-size: 80%;
	float: left;
	margin: 20px 20% 0px 5%;
	color: #2C8C67;
}

input#login:hover{
	font-size: 90%;
	float: left;
	margin: 17px 0% 0px 4.5%;
	color: #2C8C67;
}

/*Bottom row which has some additional info */
.row3 {
	float: left;
	width: 100%;
	padding: 0px;
	margin: 0px;
	background-color: #C3ECDC;
}

.row3>p, .row3>p>a{
	color: gray;
	text-align: center;
	line-height: .5em;
	text-decoration: none;
}

.row3>p>a:hover{
	color: #2C8C67;
}

#threepandas{
	margin: 30px 33% 0px 33%;
	width: 33%;
}

#return{
	float: left;
	width:100%;
	margin: 0px auto 0px auto;
	text-align: center;
}

#construction{
	float: left;
	width:100%;
	margin: 0px auto 0px auto;
	text-align: center;
}

/********************* Keyframes ****************/
@keyframes drop {
	0% {height: 1px; width: 100%;}
	100% {height: 800px;}
}

@keyframes rotate_decline {
    0%   {-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg);  transform: rotate(0deg); margin-top: -100px;}
    100%  {-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg); margin-top: 0px;}

}

@keyframes mymove {
  0%   {top: 0px;}
  25%  {top: 200px;}
  50%  {top: 100px;}
  75%  {top: 200px;}
  100% {top: 0px;}
}

@keyframes appear {
	0% {opacity: 0;}
	100% {opacity: 1;}
}

@keyframes appear2 {
	0% {opacity: 0;}
	50% {opacity: 0;}
	100% {opacity: 1;}
}

@keyframes bounceIn {
	0% {transform: scale(0); opacity: 0;}
	50% {transform: scale(0); opacity: 1;}
	100% {transform: scale(1);}
}
</style>