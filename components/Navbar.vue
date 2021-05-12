<template>
    <main>
        <header>
            <div id="outerContainer">
                <span id='number'>0</span>
                <div id='topContainer'>
                    <nuxt-link to='/p-homek12'>
                        <img id='logo' src="/images/logo1.png" alt="">
                    </nuxt-link>
                    <div id="helloContainer">
                        <template v-if="$auth.$state.loggedIn">
                            <div id='firstName'>
                                <nuxt-link to='/profile'>{{ $auth.$state.user.firstName }}</nuxt-link>
                            </div>
                        </template>
                        <template v-else>    
                            <div id='login' class='unit1'>
                                <nuxt-link to="/login">Log In</nuxt-link>
                            </div>
                            <div id='signup' class='unit2'>
                                <nuxt-link to="/p-create">Sign Up</nuxt-link>
                            </div>
                        </template>
                    </div>
                    <div id="hamburger" @click="showOptions">
                        <span id="topBurgerLine" class='burgerLine'> . . . . . . </span>
                        <span id="middleBurgerLine" class='burgerLine'> . . . . . . </span>
                        <span id="bottomBurgerLine" class='burgerLine'> . . . . . . </span>
                    </div>
                </div>
                <div id="bottomContainer">
                    <div id='features' class='linker'>
                        <nuxt-link to='/p-features' style="white-space: pre;">Features</nuxt-link>
                    </div>
                    <div id='pricing' class='linker'>
                        <nuxt-link to='/p-pricing'>Pricing</nuxt-link>
                    </div>
                    <div id='reviews' class='linker'>
                        <nuxt-link to='/p-reviews'>Reviews</nuxt-link>
                    </div> 
                    <div id='about' class='linker'>
                        <nuxt-link to='/p-about'>About</nuxt-link>
                    </div>
                </div>
            </div>
        </header>
    </main>
</template>

<script>
export default {
    methods: {
        showOptions() {
            let features = document.getElementById('features');
            let pricing = document.getElementById('pricing');
            let reviews = document.getElementById('reviews');
            let about = document.getElementById('about');
            let opts = [features, pricing, reviews, about];
            
            let hamburger = document.getElementById("hamburger");
            let topBurgerLine = document.getElementById("topBurgerLine");
            let middleBurgerLine = document.getElementById("middleBurgerLine");
            let bottomBurgerLine = document.getElementById("bottomBurgerLine");
            let logo = document.getElementById("logo");
            let login = document.getElementById("login");
            let signup = document.getElementById("signup");
            let number = document.getElementById("number");

            // first animation chunk - move forward
            let hamburgerKFFirstMove = "@keyframes hamburgerKFFirstMove                 { 0% {transform:   translateX(0) translateY(0)                ;} 50% {transform: translateX(-5px) translateY(-5px)                  ;} 100% {transform: translateX(-5px) translateY(-5px)                  ;} }";
            let topBurgerLineKFFirstMove = "@keyframes topBurgerLineKFFirstMove         { 0% {transform: translateX(0px) translateY(0px) rotateZ(0deg);} 50% {transform: translateX(0px)  translateY(0px)   rotateZ(-90deg) ;} 100% {transform: translateX(0px)  translateY(0px)   rotateZ(-90deg) ;} }";
            let middleBurgerLineKFFirstMove = "@keyframes middleBurgerLineKFFirstMove   { 0% {transform: translateX(0px) translateY(0px) rotateZ(0deg);} 50% {transform: translateX(15px) translateY(-17px) rotateZ(-90deg) ;} 100% {transform: translateX(15px) translateY(-17px) rotateZ(-90deg) ;} }";
            let bottomBurgerLineKFFirstMove = "@keyframes bottomBurgerLineKFFirstMove   { 0% {transform: translateX(0px) translateY(0px) rotateZ(0deg);} 50% {transform: translateX(30px) translateY(-34px) rotateZ(-90deg) ;} 100% {transform: translateX(30px) translateY(-34px) rotateZ(-90deg) ;} }";

            // second animation chunk -  move forward
            let logoKFFirstMove = "@keyframes logoKFFirstMove                           { 0% { transform: translateX(0px) translateY(19px) scale(1); } 20% { transform: translateX(0px) translateY(19px) scale(1); } 85% { transform: translateX(-20px) translateY(-13px) scale(0.7); } 100% { transform: translateX(-20px) translateY(-13px) scale(0.6); } }";

            // login and signup chunk - move forward
            let loginAndSignupKFFirstMove = "@keyframes loginAndSignupKFFirstMove       { 0% { transform: translateY(0); } 50% { transform: translateY(-19px); } 100% { transform: translateY(-19px) ;} }";

            // third animation chunk -  move forward
            let optionsKFFirstMove = "@keyframes optionsKFFirstMove                     { 0% { transform: translateY(30px); opacity: 0; } 30% { transform: translateY(30px); opacity: 0; } 60% {opacity: 0;} 95% { transform: translateY(0px); opacity: 1; } 100% { transform: translateY(0px); opacity: 1; } }";
                            
            // third animation chunk - move back
            let optionsKFSecondMove = "@keyframes optionsKFSecondMove                   { 0% { transform: translateY(0px); opacity: 1; }   5% { transform: translateY(0px); opacity: 1; }  40% {opacity: 0;} 70% {transform: translateY(30px); opacity: 0;} 100% { transform: translateY(30px); opacity: 0; } }";
            
            // second animation chunk - move back
            let logoKFSecondMove = "@keyframes logoKFSecondMove                         { 0% {transform: translateX(-20px) translateY(-20px) scale(0.6); } 15% {transform: translateX(-20px) translateY(-20px) scale(0.7);} 80% {transform: translateX(0px) translateY(19px) scale(1);} 100% {transform: translateX(0px) translateY(19px) scale(1);}}";
            
            // login and signup chunk - move forward
            let loginAndSignupKFSecondMove = "@keyframes loginAndSignupKFSecondMove     { 0% { transform: translateY(-20px); }                             50% { transform: translateY(0px); } 100% { transform: translateY(0px); } }";

            // first animation chunk - move back
            let hamburgerKFSecondMove = "@keyframes hamburgerKFSecondMove               {0% {transform: translateX(-5px) translateY(-5px) }                   20% {transform: translateX(-5px) translateY(-5px);}                   60%{transform:   translateX(0) translateY(0)                ;} }";
            let topBurgerLineKFSecondMove = "@keyframes topBurgerLineKFSecondMove       {0% {transform: translateX(0px)  translateY(0px)   rotateZ(-90deg) ;} 20% {transform: translateX(0px)  translateY(0px)   rotateZ(-90deg) ;} 60%{transform: translateX(0px) translateY(0px) rotateZ(0deg);} }";
            let middleBurgerLineKFSecondMove = "@keyframes middleBurgerLineKFSecondMove {0% {transform: translateX(15px) translateY(-17px) rotateZ(-90deg) ;} 20% {transform: translateX(15px) translateY(-17px) rotateZ(-90deg) ;} 60%{transform: translateX(0px) translateY(0px) rotateZ(0deg);} }";
            let bottomBurgerLineKFSecondMove = "@keyframes bottomBurgerLineKFSecondMove {0% {transform: translateX(30px) translateY(-34px) rotateZ(-90deg) ;} 20% {transform: translateX(30px) translateY(-34px) rotateZ(-90deg) ;} 60%{transform: translateX(0px) translateY(0px) rotateZ(0deg);} }";
            
            if (number.innerHTML == 0) {
                for (let i = 0; i < opts.length; i++) {
                opts[i].style.pointerEvents = 'auto'
                }
            
                while (document.styleSheets[0].length > 0) {
                    document.styleSheets[0].removeRule(0);
                }

                document.styleSheets[0].insertRule(optionsKFFirstMove, 0);
                document.styleSheets[0].insertRule(hamburgerKFFirstMove, 1);
                document.styleSheets[0].insertRule(topBurgerLineKFFirstMove, 2);
                document.styleSheets[0].insertRule(middleBurgerLineKFFirstMove, 3);
                document.styleSheets[0].insertRule(bottomBurgerLineKFFirstMove, 4);
                document.styleSheets[0].insertRule(logoKFFirstMove, 5);
                document.styleSheets[0].insertRule(loginAndSignupKFFirstMove, 6);

                // document.styleSheets[0].insertRule(firstNameKFFirstMove, 6);
                features.style.animation = "";
                pricing.style.animation = "";
                reviews.style.animation = "";
                about.style.animation = "";
                hamburger.style.animation = "";
                topBurgerLine.style.animation = "";
                middleBurgerLine.style.animation = "";
                bottomBurgerLine.style.animation = "";
                logo.style.animation = "";

                try {
                    signup.style.animation = "";
                    login.style.animation = "";    
                } catch (err) {
                    console.log(err);
                }
                // signup.style.animation = "";
                // login.style.animation = "";
                // firstName.style.animation = "";

                features.style.animation = "optionsKFFirstMove 375ms linear forwards";
                pricing.style.animation = "optionsKFFirstMove 375ms linear forwards";
                reviews.style.animation = "optionsKFFirstMove 375ms linear forwards";
                about.style.animation = "optionsKFFirstMove 375ms linear forwards";
                hamburger.style.animation = "hamburgerKFFirstMove 375ms linear forwards";
                topBurgerLine.style.animation = "topBurgerLineKFFirstMove 375ms linear forwards";
                middleBurgerLine.style.animation = "middleBurgerLineKFFirstMove 375ms linear forwards";
                bottomBurgerLine.style.animation = "bottomBurgerLineKFFirstMove 375ms linear forwards";
                logo.style.animation = "logoKFFirstMove 375ms linear forwards";

                try {
                    signup.style.animation = "loginAndSignupKFFirstMove 375ms linear forwards";
                    login.style.animation = "loginAndSignupKFFirstMove 375ms linear forwards";
                } catch (err) {
                    console.log(err)
                }
                // signup.style.animation = "loginAndSignupKFFirstMove 375ms linear forwards";
                // login.style.animation = "loginAndSignupKFFirstMove 375ms linear forwards";
                // firstName.style.animation = "firstNameKFFirstMove 375ms linear forwards";

                number.innerHTML = 1;
            } else {
                for (let i = 0; i < opts.length; i++) {
                    opts[i].style.pointerEvents = 'none'
                }
                while (document.styleSheets[0].length > 0) {
                    document.styleSheets[0].removeRule(0);
                }

                document.styleSheets[0].insertRule(optionsKFSecondMove, 0);
                // document.styleSheets[0].insertRule(pricingKFSecondMove, 1);
                // document.styleSheets[0].insertRule(reviewsKFSecondMove, 2);
                // document.styleSheets[0].insertRule(aboutKFSecondMove, 0);
                document.styleSheets[0].insertRule(hamburgerKFSecondMove, 1);
                document.styleSheets[0].insertRule(topBurgerLineKFSecondMove, 2);
                document.styleSheets[0].insertRule(middleBurgerLineKFSecondMove, 3);
                document.styleSheets[0].insertRule(bottomBurgerLineKFSecondMove, 4);
                document.styleSheets[0].insertRule(logoKFSecondMove, 5);
                document.styleSheets[0].insertRule(loginAndSignupKFSecondMove, 6);
                // document.styleSheets[0].insertRule(firstNameKFSecondMove, 6);
                
                features.style.animation = "";
                pricing.style.animation = "";
                reviews.style.animation = "";
                about.style.animation = "";
                hamburger.style.animation = "";
                topBurgerLine.style.animation = "";
                middleBurgerLine.style.animation = "";
                bottomBurgerLine.style.animation = "";
                logo.style.animation = "";

                try {
                    signup.style.animation = "";
                    login.style.animation = "";    
                } catch (err) {
                    console.log(err);
                }
                // firstName.style.animation = "";

                features.style.animation = "optionsKFSecondMove 375ms linear forwards";
                pricing.style.animation = "optionsKFSecondMove 375ms linear forwards";
                reviews.style.animation = "optionsKFSecondMove 375ms linear forwards";
                about.style.animation = "optionsKFSecondMove 375ms linear forwards";
                hamburger.style.animation = "hamburgerKFSecondMove 375ms linear forwards";
                topBurgerLine.style.animation = "topBurgerLineKFSecondMove 375ms linear forwards";
                middleBurgerLine.style.animation = "middleBurgerLineKFSecondMove 375ms linear forwards";
                bottomBurgerLine.style.animation = "bottomBurgerLineKFSecondMove 375ms linear forwards";
                logo.style.animation = "logoKFSecondMove 375ms linear forwards";

                try {
                    signup.style.animation = "loginAndSignupKFSecondMove 375ms linear forwards";
                    login.style.animation = "loginAndSignupKFSecondMove 375ms linear forwards";
                } catch (err) {
                    console.log(err);
                }
                // signup.style.animation = "loginAndSignupKFSecondMove 375ms linear forwards";
                // login.style.animation = "loginAndSignupKFSecondMove 375ms linear forwards";
                // firstName.style.animation = "firstNameKFSecondMove 375ms linear forwards";
                number.innerHTML = 0;
            }

            // console.log(number.innerHTML)
            // let outerContainer = document.getElementById("outerContainer");
            // let helloContainer = document.getElementById("helloContainer");
        }
    }
}
</script>

<style scoped>
body {
    background-color: #C3ECDC;
}

#number {
    position: absolute;
    top: 0;
    visibility: hidden;
    height: 0;
    width: 0;
}

*, ::before, ::after {
    box-sizing: border-box;
}

body, h1, h2, h3, p {
    margin: 0;
}

#hamburger {
    height: 70px;
    width: 100px;
    z-index: 4;
    cursor: pointer;
    
    
}

.burgerLine {
    background-color: black;
    height: 10px;
    border-bottom: 3px solid white;
    z-index: 3;
    position: absolute;
    white-space: pre;
    color: transparent;
    border-radius: 3px;
    /* color: white; */
    /* border-radius: 10px; */
    /* padding: 2px 10px; */
}

#topBurgerLine {
    top: 38px;
    right: 25px;
    background-color: red;
}

#middleBurgerLine {
    top: 55px;
    right: 25px;
    background-color: mediumseagreen;
}

#bottomBurgerLine {
    top: 72px;
    right: 25px;
    background-color: red;
    /* animation: riseUpAndDangleRightBottomLine 625ms ease-in-out forwards; */
}

#logo {
    /* object-fit: cover;
    height: 140px;
    width: 180px; */
    max-height: 100px;
    transform: translateY(19px);
    /* animation: getSmallMoveUpAndLeft 625ms ease-in-out forwards; */
}

#outerContainer {
    height: 115px;    
    /* background-image: url('~@/static/img/callahanSandy.jpg'); */
    background-size: 100%;
}

#bottomContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 40px;
}

#topContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 70px;
}

a {
    color: white;
}

.linker {
    opacity: 0;
    font-size: 1.3em;
    padding-top: 10px;
    z-index: 2;
    pointer-events: none;
    /* width: fit-content; */
    /* width: 100px; */
    
}

.linker > a {
    color: white;
    background-color: red;
    border-radius: 10px;
    padding: 5px 10px;
    border: 2px solid black;
    /* width: fit-content; */
}

#helloContainer {
    /* font-size: 1.6em; */
    height: 115px;
    /* padding-top: 25px; */
    padding-right: 15%;
    /* width: fit-content; */
}

#login {
    position: relative;
    top: 22px;
    left: 14px;
    width: fit-content;
    height: 35px;
    background: red;
    color: white;
    border-radius: 10px;
    padding-right: 4px;
    padding-left: 4px;
    padding-top: 3px;
    padding-bottom: 0px;
    /* border: 2px solid white; */
    border: 2px solid black;
    font-size: 1.25em;
    margin-bottom: 2px;
    white-space: pre;
  
}

#signup {
    position: relative;
    top: 24px;
    left: 8px;
    width: fit-content;
    height: 35px;
    background: red;
    color: white;
    border-radius: 10px;
    padding-right: 4px;
    padding-left: 4px;
    padding-top: 3px;
    padding-bottom: 0px;
    border: 2px solid black;
    margin-top: 2px;
    font-size: 1.25em;
    z-index: 5;
    white-space: pre;
}

#firstName {
    position: relative;
    top: -8px;
    left: -22px;
    width: fit-content;
    height: 35px;
    background: red;
    color: white !important;
    border-radius: 10px;
    padding-right: 6px;
    padding-left: 6px;
    padding-top: 5px;
    padding-bottom: 0px;
    border: 2px solid black;
    font-size: 1.3em;
    
}
</style>