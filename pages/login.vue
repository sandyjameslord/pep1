<template>
    <main>
        <div>
            <h1>Login</h1>
                <form>
                    <br>
                    <label for="">Email</label><br>
                    <input type="email" v-model="email" />
                    <br><br>
                    <label for="">Password</label><br>
                    <input type="password" v-model="password" />
                    <br><br>
                    <span @click="onLogin">Continue</span>
                    <br>
                </form>
            <br>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        async onLogin() {
            try {
                this.$auth.loginWith("local", { 
                    data: {
                        email: this.email,
                        password: this.password
                    }
                });
                this.$router.push("/p-homek12");
            } catch (err) {
                console.log(err)
            }
        },
    },
}
</script>
<style scoped>
div {
    transform: translateX(10px);
}
span {
    cursor: pointer;
    background-color: red;
    color: white;
    font-size: 2em;
    padding: 5px 10px;
    border-radius: 10px;
    border: 2px solid darkolivegreen;
}
</style>