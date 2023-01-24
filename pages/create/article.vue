<template>
    <div>
        <Logo />
        <h1
            id="page-title"
            class="my-10 font-monogram font-bold uppercase text-6xl sm:text-8xl text-center text-infrared"
        >
            New Article
        </h1>
            <section id="greeting">
            </section>
<!--        <Authenticate /> -->
        <CreatePostArticle />
    </div>
</template>

<script setup>
// Set Page Title
const title = 'Create Article'
useHead({
    title: title + ' | OHKO',
})
</script>

<script>
</script>
