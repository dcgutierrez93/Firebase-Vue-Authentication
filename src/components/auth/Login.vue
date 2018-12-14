<template lang="html">
    <div class="container">
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
                    class="form-control"
                    placeholder="Enter password...">
            </div>
            <button class="btn btn-primary" type="button" @click.prevent="signIn">Sign in</button>
            <button class="btn btn-danger" type="button" @click.prevent="signOut">Sign out</button>
        </form>
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
</style>
