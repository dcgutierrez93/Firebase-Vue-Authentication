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
                        <form class="">
                            <div class="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    class="form-control"
                                    placeholder="Enter email...">
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    class="form-control">
                            </div>
                            <button class="btn btn-primary" type="button" @click.prevent="signIn">Sign in</button>
                            <button class="btn btn-danger" type="button" @click.prevent="signOut">Sign out</button>
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
    methods: {
        signIn() {
        },
        signOut() {

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
