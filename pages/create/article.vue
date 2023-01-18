<template>
    <div>
        <h1
            id="page-title"
            class="mb-4 font-monogram font-bold uppercase text-5xl sm:text-7xl text-center infrared"
        >
            New Article
        </h1>
            <section id="greeting">
                <h2 class="text-4xl text-center font-VCR dark:text-neutral-100 uppercase">Ready to create some greatness?</h2>
                <br />
            </section>
        <Authenticate />
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
