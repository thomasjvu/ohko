<template>
    <div>
        <Hero />
        <AlertsDemo />
        <div class="flex flex-col sm:flex-row justify-between gap-5 font-fragment">
        </div>
        <FeaturedArticles />
        <FeaturedArtworks />
        <FeaturedCosplays />
        <ExamplesContent id="content" class="py-12" />
        <FileUpload />
    </div>
</template>

<script setup>
const title = 'Home'

useHead({
    title: title + ' | OHKO',
})
</script>

<style>

.category {
    padding: 25px;
    border-radius: 5px;
    border: 2px solid white;

    color: white;
}

/*
#view-articles {
    background: #ff2147;
}
*/
#view-memes {
    background: #e5e4e2;
    color: black;
}

</style>
