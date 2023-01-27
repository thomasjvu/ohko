<template>
    <form @submit.prevent="start()">
        <VAlert v-if="error" type="error" class="mb-4"> Error: {{ error }} </VAlert>
        <div v-if="loading" class="flex items-center justify-center flex-1">
            <VLoading class="w-24 h-24 text-primary-600" />
        </div>
        <div class="space-y-4 text-2xl" v-if="!loading">
            <VInput
                class="text-input text-2xl"
                v-model="email"
                name="email"
                type="email"
                label="Email address"
                placeholder="demo@ohko.org"
                required
            />
            <VInput class="text-2xl" v-model="password" name="password" type="password" label="Password" required />
            <div class="flex items-center justify-end space-x-4">
                <VButton type="button" @click="loadDemoUser()">Load Demo User</VButton>
                <VButton type="button" @click="start()">Login</VButton>
            </div>
        </div>
    </form>
</template>

<script setup>
import { Directus } from '@directus/sdk'
const runtimeConfig = useRuntimeConfig()
const directus = new Directus(runtimeConfig.directusUrl)

// User Credentials
const email = ref()
const password = ref()
const error = ref(null)
const loading = ref(false)

// Load Demo User
function loadDemoUser() {
    email.value = runtimeConfig.demoUsername
    password.value = runtimeConfig.demoPassword
}

// Begin Authentication
async function start() {
    // Authentication
    let authenticated = false

    // Login in case we don't have token or it is invalid / expired
    loading.value = true
    error.value = null
    try {
        // Login
        await directus.auth.login({
            email: email.value,
            password: password.value,
        }).then(() => {
            authenticated = true
        })
        console.log(email.value)
        console.log(password.value)
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
.text-input {
    font-size: 4rem;
}
</style>
