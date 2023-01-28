<template>
    <div>
        <h1 id="page-title" class="mb-4 text-black dark:text-white">Players</h1>
        <!-- Post Blocks -->
        <div class="flex flex-col items-center font-fragment" v-for="player in players">
            <h3>{{ player.username }}</h3>
            <h3>{{ player.first_name }}</h3>
            <h3>{{ player.last_name }}</h3>
        </div>
    </div>
    <!-- End of Post Blocks -->
</template>

<script setup>
const { getItems } = useDirectusItems()

const players = await getItems({ collection: 'directus_users' })
</script>

<style></style>
