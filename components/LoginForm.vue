<template>
    <div v-if="isLoggedIn" class="flex flex-col items-center gap-10">
        <h2 class="font-VCR text-4xl mt-20 text-center font-bold uppercase">Hello there, @{{user.username}}</h2>
        <p class="font-fragment text-4xl text-center">You are already logged in!</p>
        <NuxtLink to="/account" class="btn font-fragment text-2xl">View Account</NuxtLink>
        <Icon name="pixelarticons:mood-happy" width="50" height="50" />
    </div>
    <div v-if="!isLoggedIn">
        <form @submit.prevent="login">
            <VAlert
                v-if="error"
                type="error"
                class="mt-5 mb-5"
            >
                Error: {{ error }}
            </VAlert>
            <div v-if="loading" class="flex items-center justify-center">
                <VLoading class="w-24 h-24 mt-5" />
            </div>
            <div class="space-y-4" v-if="!loading">
                <VInput
                    id="email-input"
                    class="text-2xl mt-5 dark:text-neutral-100"
                    v-model="email"
                    name="email"
                    type="email"
                    label="Email address"
                    placeholder="demo@ohko.org"
                    required
                />
                <VInput
                    id="password-input"
                    class="text-2xl mt-5 dark:text-neutral-100"
                    v-model="password"
                    name="password"
                    type="password"
                    label="Password"
                    required
                />
                <div class="flex items-center justify-end space-x-4">
                    <VButton type="button" @click="loadDemoUser()">Load Demo User</VButton>
                    <VButton
                        type="submit"
                        variant="primary"
                        :disabled="!email || !password"
                    >
                        <span>Login</span>
                    </VButton>
                </div>
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

<style>
</style>
