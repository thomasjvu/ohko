<template>
    <div>

        <h1 id="page-title" class="mb-4 text-black dark:text-white">Users</h1>
        <h2>Hi {{ user }}</h2>
    </div>
    <!-- End of Post Blocks -->
</template>

<script setup>

const user = useDirectusUser()

</script>

<style>
</style>
