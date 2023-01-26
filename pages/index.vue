<template>
    <div>
        <Logo />
        <h1 class="text-center font-VCR uppercase my-10">Featured</h1>
        <!-- <Hero /> -->
        <!-- <AlertsDemo /> -->
        <!-- <FeaturedArt /> -->
        <FeaturedArticles />
        <!-- <FeaturedArtworks /> -->
        <!-- <FeaturedCosplays /> -->
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
