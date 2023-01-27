<template>
    <div>
        <h1 id="page-title" class="mb-4 text-black dark:text-white">Users</h1>
        <!-- Post Blocks -->
        <div class="flex flex-col items-center font-fragment" v-for="user in users">
            <h3>{{ user.username }}</h3>
            <h3>{{ user.first_name }}</h3>
            <h3>{{ user.last_name }}</h3>
        </div>
    </div>
    <!-- End of Post Blocks -->
</template>

<script setup>
const { getUsers } = useDirectusUsers()

const users = await getUsers()
</script>

<style></style>
