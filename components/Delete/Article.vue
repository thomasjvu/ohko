<template>
    <div>
    </div>
</template>

<script setup>
import { Directus } from '@directus/sdk'

// const config = useRuntimeConfig()
const directus = new Directus('https://app.ohko.org')
const articles = directus.items('articles')

</script>

<style>
</style>
