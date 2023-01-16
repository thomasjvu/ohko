<template>
    <div class="max-w-screen-sm sm:text-center sm:mx-auto flex items-center flex-col justify-center">
        <h1 id="page-title" class="mb-4 font-fugaz font-bold uppercase text-7xl sm:text-8xl text-black dark:text-white">Users</h1>
    </div>
    <LoadArticles />
    <!-- End of Post Blocks -->
</template>

<script setup>

useHead({
    title: 'Articles' + ' | OHKO'
})
</script>

<style>

/* Post List */
.post-title {
    font-family: 'Fugaz One', 'Arial', sans-serif;
}

.post-date {
    color: #797979;
    font-family: 'Fragment Mono';
}
</style>
