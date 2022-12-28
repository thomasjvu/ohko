<template>
    <div class="space-y-12">
        <!-- Login Form -->
        <div class="">
            <ExamplesLoginForm v-if="!isLoggedIn" />
            <div v-if="isLoggedIn" class="flex flex-col items-center">
                <div class="flex items-center justify-center">
                    <img
                        class="w-20 h-20 mr-4 border-2 rounded-xl border-primary-300"
                        :src="fileUrl(user.avatar)"
                    />
                    <div class="">
                        <p
                            class="text-2xl font-bold font-fragment dark:text-white"
                        >
                            Hello, {{ user.first_name }}!
                        </p>
                        <p
                            class="text-sm font-medium font-fragment text-gray-500 -mt-5 mb-7"
                        >
                            {{ user.email }}
                        </p>
                    </div>
                </div>
                <VButton variant="primary" @click="auth.logout()" class="w-1/4">
                    Logout</VButton
                >
            </div>
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
