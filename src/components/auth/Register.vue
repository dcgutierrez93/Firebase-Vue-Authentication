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
                            <div class="form-group" :class="{invalid: $v.name.$error}">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    id="text"
                                    class="form-control"
                                    @blue="$v.name.$touch()"
                                    v-model="name">
                                    <p class="text-danger" v-if="!$v.name.required">This field must not be empty.</p>
                            </div>
                            <div class="form-group" :class="{invalid: $v.email.$error}">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    class="form-control"
                                    placeholder="e.g. david@boss.com"
                                    @blur="$v.email.$touch()"
                                    v-model="email">
                                    <p class="text-danger" v-if="!$v.email.email">Please provide a valid email address.</p>
                                    <p class="text-danger" v-if="!$v.email.required">This field must not be empty.</p>
                            </div>
                            <div class="form-group" :class="{invalid: $v.password.$error}">
                                <label>Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    class="form-control"
                                    @blur="$v.password.$touch()"
                                    v-model.trim="password">
                            </div>
                            <div class="form-group" :class="{invalid: $v.confirmPassword.$error}">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    class="form-control"
                                    @blur="$v.confirmPassword.$touch()"
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
import axios from 'axios'
import { required, email, numeric, minValue, minLength, sameAs, requiredUnless } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    validations: {
        name: {
            required,
            minLen: minLength(3)
        },
        email: {
            required,
            email,
            unique: val => {
                if (val === '') return true
                return axios.get('/users.json?orderBy="email"&equalTo="' + val + '"')
            .then(res => {
              return Object.keys(res.data).length === 0
            })
            }
        },
        password: {
            required,
            minLen: minLength(6)
        },
        confirmPassword: {
//          sameAs: sameAs('password')
            sameAs: sameAs(vm => {
                return vm.password
            })
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
            this.$store.dispatch('signup', formData)
        }
    }
}
</script>

<style scoped lang="css">
.text-danger {
    font-size: 12px;
}
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
