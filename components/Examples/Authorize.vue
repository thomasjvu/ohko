<template>
    <div class="space-y-12">
        <!-- Login Form -->
        <div class="">
            <ExamplesLoginForm v-if="!isLoggedIn" />
            <div v-if="isLoggedIn" class="flex items-center justify-between">
                <div class="flex items-center">
                    <img class="w-20 h-20 mr-4 border-2 rounded-xl border-primary-300" :src="fileUrl(user.avatar)" />
                    <div class="mr-4">
                        <p class="text-2xl font-bold font-fragment dark:text-white">
                            Welcome <span class="infrared">@{{ user.username }}! </span>
                        </p>
                        <p class="text-2xl font-medium font-fragment text-gray-500">
                            {{ user.email }}
                        </p>
                    </div>
                </div>
                <VButton variant="primary" @click="auth.logout()" class="w-1/4"> Logout</VButton>
            </div>
        </div>
        <!-- User Details -->
        <div class="flex flex-col p-4 rounded-lg bg-gradient-to-b from-primary-600 to-primary-900">
            <p class="text-xl font-bold tracking-wide text-center text-primary-200 infrared font-fragment">
                You are
                <span class="text-black dark:text-white animate-pulse">{{ isLoggedIn ? 'logged in 👍' : 'logged out 👎' }}</span>
            </p>
        </div>
    </div>
</template>

<script setup>
// Get user data from the store
import { storeToRefs } from 'pinia'
import { useAuth } from '~~/store/auth'
const auth = useAuth()
const { fileUrl } = useFiles()
const { isLoggedIn, user } = storeToRefs(auth)
</script>
