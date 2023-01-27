<template>
    <Sidebar />
    <ToggleMenu />
    <main class="bg-neutral-100 dark:bg-neutral-900">
        <NuxtLayout>
            <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#ff2147 0%,#ffbb33 100%)" />
            <NuxtPage />
        </NuxtLayout>
    </main>
</template>

<script setup>
/* Authentication */
import { storeToRefs } from 'pinia'
import { useAuth } from '~~/store/auth'

const auth = useAuth()
const { fileUrl } = useFiles()
const { isLoggedIn, user } = storeToRefs(auth)
</script>

<style>
main {
    margin-left: 20rem;
}
/* Responsive */
@media (max-width: 1024px) {
    main {
        margin-left: 0rem;
    }
}
</style>
