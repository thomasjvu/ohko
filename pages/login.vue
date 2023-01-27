<template>
    <div>
        <Logo />
        <h1 class="font-fugaz text-center text-5xl sm:text-6xl text-neutral-900 dark:text-neutral-100 uppercase my-10">Login</h1>
        <!-- Figure out authentication differences later -->
        <!-- <Authenticate /> -->
        <LoginForm />
    </div>
</template>

<script setup>
// Set Metadata
const title = 'Login'

useHead({
    title: title + ' | OHKO',
})
</script>

<script>
</script>

<style>
</style>
