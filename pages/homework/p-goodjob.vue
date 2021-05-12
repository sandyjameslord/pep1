<template>
    <main>
		<div id="homewrapper">
			<div>
				<img class="candy" id="candy1" src="/images/candy1.png" />
				<img class="candy" id="candy2" src="/images/candy2.png" />
				<img class="candy" id="candy3" src="/images/candy3.png" />
				<img class="candy" id="candy4" src="/images/candy1.png" />
				<img class="candy" id="candy5" src="/images/candy2.png" />
				<img class="candy" id="candy6" src="/images/candy3.png" />
				<img class="candy" id="candy7" src="/images/candy1.png" />
				<img class="candy" id="candy8" src="/images/candy2.png" />
				<img class="candy" id="candy9" src="/images/candy3.png" />
				<img id="panda1" src="/images/homeworkpanda2.png" />
				<br><br><br><br><br><br>
			</div>
			<h1 id="usernamehere">Username</h1>
			<h2>
				<a href="/p-homek12">Back to Home</a>
			</h2>
		</div>
    </main>
</template>

<script>
export default {
	mounted() {
		/********************* Updating Username at top of Page ************/

		// // Get student's first name and store in a variable
		// var name = "Name Here";

		// store the DOM node with id="username" in a variable
		var updateUsername = document.getElementById('usernamehere'); 

		// // update the inner HTML of this node to the name from the student object
		// updateUsername.innerHTML = name;

		// update the inner HTML of this node to the name from the student object
		if (!this.$auth.$state.loggedIn) {
			this.$router.push("/p-create");
			return
		}
		else {
			updateUsername.innerHTML = "Great job " + this.$auth.user.email + "!";
		}
	}
}
</script>

<style scoped>
/* Colors
light green: #ECF9F3
medium green: #C3ECDC;
dark green: #2C8C67;

Tips:
padding/margin list goes top, right, bottom, left

Add a border to identify an element
	border-width: 2px 2px 2px 2px;
	border-style: solid;
	border-color: purple;
*/
body{
	background-color: #C3ECDC;
	font-family: Arial, Verdana, sans-serif;
}

#panda1 {
	position: absolute;
	float: left;
	animation-name: grow;
	animation-duration: 2s;
}
h1, h2 {
  width: 100%;
  float: left;
  text-align: center;
  color: #2C8C67;
  margin: 2px 0% 0px 0%;
  text-decoration: none;
}

/* h1 {
	width: 100%;
	float: left;
	text-align: center;
	color: #2C8C67;
	margin: 2px 0% 0px 0%;
}
h2 { float: left; width: 100%;}
a {
	float: left;
	color: #2C8C67;
	text-decoration: none;
	text-align: center;
	width: 100%;
	margin: 0px;
} */

@keyframes grow {
	0% {transform: scale(0);}
	99.9% {transform: scale(1);}
	100% {display:none;}
}

.candy {
	position: absolute;
	float: left;
	width: 5%;
	margin-top: 550px;
	}

#candy1{ animation-name: drop1; animation-duration: 1s; margin-left: 3%;}
#candy2{ animation-name: drop2; animation-duration: 2s; margin-left: 10%;}
#candy3{ animation-name: drop2; animation-duration: 4s; margin-left: 20%;}
#candy4{ animation-name: drop1; animation-duration: 1s; margin-left: 30%;}
#candy5{ animation-name: drop1; animation-duration: 4s; margin-left: 68%;}
#candy6{ animation-name: drop2; animation-duration: 1s; margin-left: 73%;}
#candy7{ animation-name: drop2; animation-duration: 3s; margin-left: 79%;}
#candy8{ animation-name: drop1; animation-duration: 2s; margin-left: 87%;}
#candy9{ animation-name: drop2; animation-duration: 1s; margin-left: 93%;}


@keyframes drop1 {
	0% {margin-top: -60px; transform: rotate(0deg);}
	100% {margin-top: 550px; transform: rotate(360deg);}	
}

@keyframes drop2 {
	0% {margin-top: -60px; transform: rotate(0deg);}
	100% {margin-top: 550px; transform: rotate(-360deg);}	
}

/* Style for bigger TV/Computer screen */
@media (min-width: 1000px) {
	#panda1 {
		width: 33%;
		margin: 150px 32% 0px 35%;}
	h2 {margin: 500px 0% 0px 0%;}
}
/* Style for medium iPad-size screen */
@media (max-width: 1000px) {
	#panda1 {
		width: 33%;
		margin: 150px 32% 0px 35%;}
	h2 {margin: 380px 0% 0px 0%;}
}
/* Style for very small screens */
@media (max-width: 610px) { 
	#panda1 {
		width: 50%;
		margin: 120px 32% 0px 23%;}
	h2 {margin: 300px 0% 0px 0%;}
}

</style>
