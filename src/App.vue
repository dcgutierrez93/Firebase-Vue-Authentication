<style>

</style>

<template>

<div id="app">
    <faheader></faheader>
    <router-view/>
    <fafooter></fafooter>
</div>

</template>

<script>

import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'

export default {
    name: 'app',
    components: {
        faheader: Header,
        fafooter: Footer
    }
}

</script>
