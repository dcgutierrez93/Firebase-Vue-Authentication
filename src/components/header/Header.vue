<style lang="css">

.navbar {
    padding: 10px 100px;
}

</style>

<template lang="html">

<header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <a class="navbar-brand" href="#"><i class="fas fa-book-reader fa-lg"></i></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <!-- <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>
                </li>
            </ul> -->
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-if="auth">
                    <router-link class="nav-link" to="/secure">Dashboard</router-link>
                </li>
                <li class="nav-item" v-if="!auth">
                    <router-link class="nav-link" to="/Login">Login</router-link>
                </li>
                <li class="nav-item" v-if="!auth">
                    <router-link class="nav-link" to="/Register">Register</router-link>
                </li>
                <!-- <li class="nav-item" v-if="auth">
                    <button @click="onLogout" class="logout">Logout</button>
                </li> -->
            </ul>
            <span class="navbar-text">
                <!-- <router-link class="mr-3" to="/login">Login</router-link>
                <router-link to="/register">Register</router-link> -->
                <button @click="onLogout" class="btn btn-outline-success my-2 my-sm-0">Logout</button>
            </span>
        </div>
    </nav>
</header>

</template>

<script>

export default {
    computed: {
        auth() {
            return this.$store.getters.isAuthenticated
        }
    },
    methods: {
        onLogout() {
            this.$store.dispatch('logout')
        }
    }
}

</script>
