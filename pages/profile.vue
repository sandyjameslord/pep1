<template>
    <main>
        <h1>Profile</h1>
<br>
        <div v-if="$auth.$state.user.userType == 'student'">
            <div id="clientInfo">
                <span class='client-class' id='clientName'>Student Name: {{ $auth.$state.user.firstName + " " + $auth.$state.user.lastName }}</span>
                <span class='client-class' id='clientEmail'>Student Email / Login: {{ $auth.$state.user.email }}</span>
                <span class='horizontalSeparatorBlue'></span>
                <!-- <h3 class='client-class' >Student Account</h3> -->
                <h3 class='client-class' >Homework Assignments</h3>
                <!-- <h5>HW1 Status</h5> -->
                <div v-for="(hwOne) in hwOnes" :key="hwOne._id">
                    <div v-if="$auth.$state.user.email == hwOne.studentEmail">
                        <span class='client-class' >{{$auth.$state.user.firstName}} got a {{hwOne.numberCorrect}} / 10 on Practice 1.</span>
                    </div> 
                </div>   
                <div v-for="(hwTwo) in hwTwos" :key="hwTwo._id">
                    <div v-if="$auth.$state.user.email == hwTwo.studentEmail">
                        <span class='client-class' >{{$auth.$state.user.firstName}} got a {{hwTwo.numberCorrect}} / 10 on Practice 2.</span>
                    </div> 
                </div>
                
                <hr>
                <h3 class='client-class' >Tests</h3>            
                <div v-for="(test) in tests" :key="test._id">
                    <div v-if="$auth.$state.user.email == test.studentEmail">
                        <span class='client-class' >{{$auth.$state.user.firstName}} got a {{test.numberCorrect}} / 10 on the Test.</span>
                    </div> 
                </div>

            </div>

            <br>
        </div>
        <div v-else-if="$auth.$state.user.userType == 'teacher'">
            <div id="employeeInfo">   
                <h3 class='client-class' >Teacher Account</h3>            
                <span class='client-class' id='clientName'>Name: {{ $auth.$state.user.firstName + " " + $auth.$state.user.lastName }}</span>
                
                <br>
                <span class='client-class' id='clientEmail'>Employee Email / Login: {{ $auth.$state.user.email }}</span>
                <br>
                <br><br>
                <h3 class='client-class' >My Students</h3>
                <div v-for="(user) in users" :key="user._id">
                    <div v-if="user.userType == 'student'">
                        <div v-if="user.studentsTeachersName == $auth.$state.user.lastName">
                            <span class='client-class'>{{user.firstName}} {{user.lastName}} is in your class</span>
                            
                            <div v-for="(hwOne) in hwOnes" :key="hwOne._id">
                                <div v-if="hwOne.studentEmail == user.email">
                                    <span class='client-class' >{{user.firstName}} got a {{hwOne.numberCorrect * 10}}% on Practice 1.</span>
                                </div>
                            </div>

                            <div v-for="(hwTwo) in hwTwos" :key="hwTwo._id">
                                <div v-if="hwTwo.studentEmail == user.email">
                                    <span class='client-class' >{{user.firstName}} got a {{hwTwo.numberCorrect * 10}}% on Practice 2.</span>
                                </div>
                            </div>

                            <div v-for="(test) in tests" :key="test._id">
                                <div v-if="test.studentEmail == user.email">
                                    <span class='client-class' >{{user.firstName}} got a {{test.numberCorrect * 10}}% on the Test.</span>
                                </div>
                            </div>
                            <hr>

                        </div>
                    </div>
                </div>            
                <br>
            </div>
            <br>
        </div>
    </main>
</template>

<script>
export default {
    middleware: "auth",
    async asyncData({ $axios }) {
            try {
                let hwOneResponse = await $axios.$get("/api/hwOnes");
                let hwTwoResponse = await $axios.$get("/api/hwTwos");
                let testResponse = await $axios.$get("/api/tests");
                let userResponse = await $axios.$get("/api/auth/users");

                return {
                    hwOnes: hwOneResponse.hwOnes,
                    hwTwos: hwTwoResponse.hwTwos,
                    tests: testResponse.tests,
                    users: userResponse.users

                }
            } catch (err) {
                console.log(err.message)
            }
        },
    methods: {
        
        
    },
    mounted() {
    }
}
</script>

<style scoped>
body {
    background-color: transparent;
}

#today {
    font-size: 2em;
}

.horizontalSeparatorBlue {
    width: 100%;
    height: 10px;
    background-color: red;
    margin-top: 5px;
    margin-bottom: 5px;
    border-top: 2px solid #2C8C67;
    border-bottom: 2px solid #2C8C67;
}

.horizontalSeparatorOrange {
    width: 100%;
    height: 10px;
    background-color: rgb(247, 173, 76);
}

img {
    object-fit: cover;
    height: 340px;
    width:340px;
    padding: 0;
}

.client-class {
    padding-left: 10px;
}

#clientInfo {
    display: flex;
    flex-direction: column;
}

main {
    background-color: transparent;
}

nuxt-link {
    cursor: pointer;
    color: black;
}

#clientName {
    /* font-size: 1.2em; */
    padding-bottom: 4px;
}
</style>