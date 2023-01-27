<template>
    <!-- For when Player is logged in -->
    <div v-if="isLoggedIn" class="flex flex-col items-center gap-10">
        <h2 class="font-VCR text-4xl mt-20 text-center font-bold uppercase">Hello there, @{{ user.username }}</h2>
        <p class="font-fragment text-4xl text-center">You are already logged in!</p>
        <NuxtLink to="/account" class="btn font-fragment text-2xl">View Account</NuxtLink>
    </div>
    <!-- For when Player is not logged in -->
    <div v-if="!isLoggedIn">
        <VAlert v-if="error" type="error" class="mt-5 mb-5 font-fragment"> Error: {{ error }} </VAlert>
        <!-- Login form -->
        <form @submit.prevent="login" class="flex flex-col gap-20 font-fragment">
            <div v-if="loading" class="flex items-center justify-center">
                <Loading class="w-24 h-24 mt-5" />
            </div>
            <div class="space-y-4" v-if="!loading">
                <!-- Email -->
                <label class="uppercase text-neutral-400">
                    Email
                    <input
                        v-model="email"
                        type="email"
                        class="normal w-full rounded text-neutral-900 dark:text-neutral-100 text-2xl my-10"
                        required
                    />
                </label>
                <!-- Password -->
                <label class="uppercase text-neutral-400">
                    Password
                    <input v-model="password" type="password" class="normal w-full rounded text-neutral-900 dark:text-neutral-100 my-10" required />
                </label>
                <!-- Buttons -->
                <section class="flex items-center justify-end space-x-4">
                    <Button type="button" @click="loadDemoUser()" class="font-VCR uppercase text-lg">Load Demo User</Button>
                    <Button type="submit" variant="primary" :disabled="!email || !password" class="font-VCR uppercase text-lg">Login</Button>
                </section>
            </div>
        </form>
    </div>
</template>

<script setup>
// Import the auth store from pinia
import { storeToRefs } from 'pinia'
import { useAuth } from '~~/store/auth'

const auth = useAuth()
const { fileUrl } = useFiles()
const { isLoggedIn, user } = storeToRefs(auth)

const email = ref()
const password = ref()
const error = ref(null)
const loading = ref(false)

const runtimeConfig = useRuntimeConfig()

function loadDemoUser() {
    email.value = runtimeConfig.demoUsername
    password.value = runtimeConfig.demoPassword
}

async function login() {
    loading.value = true
    error.value = null
    try {
        // Login
        await auth.login({
            email: email.value,
            password: password.value,
        })
        // Clear the form
        email.value = ''
        password.value = ''
        window.location.replace('/account')
    } catch (e) {
        error.value = e.message
    } finally {
        loading.value = false
    }
}
</script>

<style scoped>
input {
    background: rgba(0, 0, 0, 0);
    border: 0px;
    border-radius: 0;
    border-bottom: 1px solid #797979;
}
</style>
