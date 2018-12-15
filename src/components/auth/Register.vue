<template lang="html">

    <div class="container">
        <div class="wrapper">
            <div class="">
                <div class="mt-5 text-center">
                    <h1>Register</h1>
                    <p>and let's get you to the Awesome!</p>
                </div>
                <div class="card" id="register-card">
                    <div class="card-body">
                        <form @submit.prevent="onSubmit">
                            <div class="form-group">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    id="text"
                                    class="form-control"
                                    v-model="name">
                            </div>
                            <div class="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    class="form-control"
                                    placeholder="e.g. david@boss.com"
                                    v-model="email">
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    class="form-control"
                                    v-model="password">
                            </div>
                            <div class="form-group">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    class="form-control"
                                    v-model="confirmPassword">
                            </div>
                            <button class="btn btn-primary" type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
// import Firebase from 'firebase'
// TODO: Install Axios
import axios from 'axios'

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        onSubmit() {
            const formData = {
                name: this.name,
                email: this.email,
                password: this.password,
                confirmPassword: this.confirmPassword
            }
            console.log(formData)
            // axios.post('https://fir-authentication-96400.firebaseio.com/user.json', {
            //     name: formData.name,
            //     email: formData.email,
            //     password: formData.password,
            //     confirmPassword: formData.confirmPassword
            // })
            //     .then(res => console.log(res))
            //     .catch(error => console.log(error))
            this.$store.dispatch('signup', formData)
        }
    }
}
</script>

<style scoped lang="css">

#register-card {
    width: 600px;
}
.wrapper {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
}
</style>
