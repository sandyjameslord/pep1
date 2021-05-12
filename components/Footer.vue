<template>
    <main>
        <header>
            <div class="row4">
                <p>Peppermint Math Tutor Grades K-4 by Galaga</p>
                <p><a href="https://www.framingham.edu/" target="_blank"> Framingham State University | Software Engineering Spring 2021</a></p>
                <p>
                    <nuxt-link to="/p-privacy">Privacy Policy</nuxt-link> | 
                    <nuxt-link to="/termsAndConditions">Terms and Conditions of Use</nuxt-link>
                    <!-- <a href="termsAndConditions">Terms and Conditions of Use</a> -->
                </p>
                <template v-if="$auth.$state.loggedIn">
                    <span @click="onLogout" id='logout'>Logout</span>
                </template>
  			</div>
            <div id='container'>
            </div>
        </header>
    </main>
</template>

<script>
export default {
    methods: {
        async onLogout() {
            await this.$auth.logout();
        }
    }
}
</script>

<style scoped>
body {
    background-color: #C3ECDC;
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
	/* line-height: .5em; */
	text-decoration: none;
}

.row4>p>a:hover{
	color: #ECF9F3;
}

#container {
    display: flex;
    /* flex-direction: column;
    justify-content:space-between;
    padding-top: 25px;
    background: rgb(9,121,86);
    background: linear-gradient(69deg, rgb(2, 142, 170) 50%, rgba(9,121,86,1) 100%);
    border-bottom: 10px solid white;
    color: white;
    height: 90px; */
    margin:auto;
}

#logout {
    /* position: relative; */
    /* bottom: 5px;
    left: 80%; */
    cursor: pointer;
    /* font-size: 3em; */
    color: white;
    text-align: right;
    z-index: 5;
    border: 2px solid black;
    padding: 5px 10px;
    background-color: red;
    margin-left: 80%;
    font-size: 1.2em;
    border-radius: 10px;
}
</style>