<template>
    <div v-if="isLoggedIn" class="flex flex-col items-start gap-5">
        <div class="flex items-center justify-center">
            <img
                class="w-20 h-20 mr-4 border-2 rounded-xl border-primary-300"
                :src="fileUrl(user.avatar)"
            />
            <div class="">
                <p class="text-2xl font-bold font-fragment dark:text-white">
                    Hello, {{ user.username }}!
                </p>
                <p class="text-sm font-medium font-fragment text-gray-500">
                    {{ user.email }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useAuth } from '~~/store/auth'

const auth = useAuth()
const { fileUrl } = useFiles()
const { isLoggedIn, user } = storeToRefs(auth)
</script>

<style></style>
