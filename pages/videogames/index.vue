<template>
    <Logo />
    <h1 class="font-VCR uppercase text-center my-10">Video Games</h1>

    <!-- Nintendo -->
    <div>
        <h2 class="uppercase font-VCR">Nintendo</h2>
        <h3 class="uppercase font-VCR">Nintendo Switch</h3>
        <h3 class="uppercase font-VCR">Nintendo 3DS</h3>
        <h3 class="uppercase font-VCR">Nintendo Wii U</h3>
        <h3 class="uppercase font-VCR">Nintendo Wii</h3>
        <h3 class="uppercase font-VCR">Nintendo Gamecube</h3>
        <h3 class="uppercase font-VCR">Nintendo 64</h3>
        <h3 class="uppercase font-VCR">Super Nintendo Entertainment System</h3>
    </div>

    <!-- Sony PlayStation -->
    <div>
        <h2 class="uppercase font-VCR">Sony PlayStation</h2>
        <h3 class="uppercase font-VCR">PlayStation 5 (PS5)</h3>
        <h3 class="uppercase font-VCR">PlayStation 4 (PS4)</h3>
        <h3 class="uppercase font-VCR">PlayStation 3 (PS3)</h3>
        <h3 class="uppercase font-VCR">PlayStation Portable (PSP)</h3>
        <h3 class="uppercase font-VCR">PlayStation 2 (PS2)</h3>
        <h3 class="uppercase font-VCR">PlayStation (PS1)</h3>
    </div>

    <!-- XBox-->
    <div>
        <h2 class="uppercase font-VCR">Microsoft XBox</h2>
        <h3 class="uppercase font-VCR">XBox Series X/S</h3>
        <h3 class="uppercase font-VCR">XBox One</h3>
        <h3 class="uppercase font-VCR">XBox 360</h3>
        <h3 class="uppercase font-VCR">XBox</h3>
    </div>

    <!-- All Games -->
    <div>
        <h2 class="uppercase font-VCR">All Games</h2>
        <section class="flex flex-col items-center justify-center font-fragment" v-for="videogame in videogames">
            <section class="flex items-center videogame-container w-full my-5">
                <section id="videogame-image-container" class="w-4/12 mr-10">
                    <img class="object-cover w-full rounded" v-bind:src="'https://app.ohko.org/assets/' + videogame.featured_image" />
                </section>
                <section id="videogame-details-container">
                    <h4>{{ videogame.title }}</h4>
                </section>
            </section>
        </section>
    </div>
</template>

<script setup>
const { getItems } = useDirectusItems()

const videogames = await getItems({ collection: 'videogames' })

useHead({
    title: 'Anime' + ' | OHKO',
})
</script>

<style scope></style>
