<template lang="html">

    <div class="container">
        <div class="wrapper">
            <div class="">
                <div class="mt-5 text-center">
                    <h1>Sign In</h1>
                    <p>and let's get you to the Awesome!</p>
                </div>
                <div class="card" id="login-card">
                    <div class="card-body">
                        <form @submit.prevent="onSubmit">
                            <div class="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    class="form-control"
                                    placeholder="Enter email..."
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
                            <button class="btn btn-primary" type="submit">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Firebase from 'firebase'

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        onSubmit() {
            const formData = {
                email: this.email,
                password: this.password
            }
            console.log(formData)
        }
    }
}
</script>

<style lang="css">
#login-card {
    width: 600px;
}
.wrapper {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
}
</style>
