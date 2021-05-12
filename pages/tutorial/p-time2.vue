<template>
    <main>
		<div id="homewrapper">
			<div id="homerow1">
				<h2 id="usernamehere">Username</h2>
				<img id="candybowl" src="/images/tencandy.png" />
				<!-- <a href="profile">
					<img id="accounticon" src="/images/accounticon.png" />
				</a> -->
			</div>
			<div id="homerow2">
				<table align="center" width="100%">
					<tbody>
						<tr>
							<td style="border: none;" align="center">
								<h3 style="font-size: 26px;">You Can Tell Time Too</h3>
								<iframe width="800" height="500" src="https://www.youtube.com/embed/ezrdR-NlmjQ"></iframe>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	mounted() {
		/********************* Updating Username at top of Page ************/

		// store the DOM node with id="username" in a variable
		var updateUsername = document.getElementById('usernamehere'); 

		// update the inner HTML of this node to the name from the student object
		if (!this.$auth.$state.loggedIn) {
			this.$router.push("/p-create");
			return
		} else {
			updateUsername.innerHTML = this.$auth.user.email;
		}
	}
}
</script>

<style scoped>
body{
	background-color: #C3ECDC;
	font-family: Arial, Verdana, sans-serif;
}

a{
	color: #2C8C67;
	text-decoration: none;
}

td {
	border-radius: 25px;
	padding: 50px;
	/*border: 3px solid #2C8C67;*/
}

/********************* home page kids ***************/
#homerow1, #homerow2 {
	float: left;
	width: 100%;
	padding: 0px;
	margin: 0px;
}

#homelink {
	float: left;
	padding: 0px;
	margin: 4px 0% 0px 0%;
}

h2 {
	float: left;
	color: #2C8C67;
	background-color: white;
	border-radius: 5px;
	padding: 5px 0% 5px 0%;
	text-align: center;
}

#candybowl {
	float: left;
	padding: 0px 0% 0px 0%;
	margin: 5px 0% 0px 0%;
}

#accounticon {
	float: right;
	padding: 0px;
	margin: 4px 1% 0px 0%;
}

/*************** row 2 ************/
.row2col {
	float: left;
	padding: 0px;
	margin: 0px;
}

#stories {
	float: left;
	width: 60%;
	padding: 0px;
}

#stories:hover {
	width: 61%;
}

#hw1 {
	float: left;
	width: 48%;
	padding: 0px;
}

#hw1:hover {
	width: 49%;
}

#games {
	float: left;
	width: 78%;
	padding: 0px;
}

#games:hover {
	width: 79%;
}

#tests {
	float: left;
	width: 80%;
	padding: 0px;
}

#tests:hover {
	float: left;
	width: 81%;
	padding: 0px;
}

h3{
	float: left;
	width: 100%;
	text-align: center;
	color: #2C8C67;
	margin: 0px;
}

.h3{
	float: left;
	width: 100%;
	text-align: center;
	vertical-align: center;
	color: #2C8C67;
	margin: 0px;
}

h4{
	float: left;
	width: 100%;
	text-align: center;
	color: #2C8C67;
}

#row3{
	background-color: #2C8C67;
	float: left;
	width: 100%;
}

#row3col1{
	float: left;
	padding: 0px;
}

#row3col2{
	float: left;
	padding: 0px;
}

p{
	float: left;
	width: 100%;
	text-align: center;
	color: white;
	margin: 0px 0% 15px 0%;
	padding: 0px;
}

.progress {
	width: 60%;
	float: left;
	padding: 0px;
	margin: 15px 20% 0px 20%;
	border-width: 3px;
	border-style: solid;
	border-color: white;
	border-radius: 10px;
}

.row4 {
	float: left;
	width: 100%;
	padding: 10px 0% 20px 0%;
	margin: 0px;
	background-color: #2C8C67;
}

.row4>p, .row4>p>a{
	color: white;
	text-align: center;
	font-size: 100%;
	line-height: .5em;
	text-decoration: none;
}

.row4>p>a:hover{
	color: #ECF9F3;
}

.button {
	background-color: #2C8C67;
	border-radius: 25%;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
}

/* Style for bigger TV/Computer screen */
@media (min-width: 1000px) {
	#homelink {width: 7%;}
	#candybowl {width: 12%;}
	h2 {width: 30%; margin: 30px 0% 0px 22%; }
	#accounticon { 	width:4%;}
	.row2col { width: 25%;}
	#stories {margin: 150px 20% 2px 20%;}
	#stories:hover {margin: 148px 19.5% 0px 19.5%;}
	#hw1 {margin: 100px 26% 0px 26%;}
	#hw1:hover {margin: 98px 25.5% 0px 25.5%;}
	#games {margin: 175px 9% 0px 4%;}
	#games:hover {margin: 174px 8.5% 0px 3.5%;}
	#tests {margin: 120px 19% 0px 10%;}
	#tests:hover {margin: 119px 18.5% 0px 9.5%;}
	#row3{	margin: 100px 0% 0px 0%;}
	#row3col1{ width: 25%; margin: 0px 0% 0px 25%;}
	#row3col2{ width: 25%; 	margin: 0px 25% 0px 0%;}
	.row4>p{font-size: 100%;}
}

/* Style for medium iPad-size screen */
@media (max-width: 1000px) {
	#homelink {width: 10%;}
	#candybowl {width: 13%;}
	h2 {width: 30%; margin: 15px 0% 0px 18%; }
	#accounticon { 	width:4%;}
	.row2col { width: 25%;}
	#learn {margin: 150px 20% 2px 20%;}
	#learn:hover {margin: 148px 19.5% 0px 19.5%;}
	#hw1 {margin: 100px 26% 0px 26%;}
	#hw1:hover {margin: 98px 25.5% 0px 25.5%;}
	#games {margin: 175px 9% 0px 4%;}
	#games:hover {margin: 174px 8.5% 0px 3.5%;}
	#tests {margin: 120px 19% 0px 10%;}
	#tests:hover {margin: 119px 18.5% 0px 9.5%;}
	#row3{	margin: 100px 0% 0px 0%;}
	#row3col1{ width: 25%; margin: 0px 0% 0px 25%;}
	#row3col2{ width: 25%; 	margin: 0px 25% 0px 0%;}
	.row4>p{font-size: 70%;}
}

/* Style for very small screens */
@media (max-width: 610px) { 
	#homelink {width: 10%;}
	#candybowl {width: 20%;}
	#usernamehere {margin-top: 20px;}
	h2 {font-size: 90%; width: 30%; margin: 5px 0% 0px 15%; }
	#accounticon { 	width:6%;}
	.row2col { width: 50%;}
	#stories {margin: 50px 20% 2px 20%;}
	#stories:hover {margin: 48px 19.5% 0px 19.5%;}
	#hw1 {margin: 70px 26% 0px 26%;}
	#hw1:hover {margin: 68px 25.5% 0px 25.5%;}
	#games {margin: 50px 9% 0px 4%;}
	#games:hover {margin: 48px 8.5% 0px 3.5%;}
	#tests {margin: 60px 19% 0px 10%; }
	#tests:hover {margin: 58px 18.5% 0px 9.5%;}
	#row3{	margin: 30px 0% 0px 0%;}
	#row3col1{ width: 50%; margin: 0px 0% 0px 0%;}
	#row3col2{ width: 50%; 	margin: 0px 0% 0px 0%;}
	.row4>p{font-size: 70%;}
}
</style>