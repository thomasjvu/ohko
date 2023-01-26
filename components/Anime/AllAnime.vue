<template>
    <!-- All Anime -->
    <section>
        <h2 class="uppercase">All Anime</h2>
        <div class="flex flex-col items-center font-fragment" v-for="anime in animes">
            <div class="anime-container w-full my-5">
                <NuxtLink :to="`/anime/${anime.slug}`" class="flex items-center">
                <section id="anime-image-container" class="w-4/12 mr-10">
                    <img class="object-cover w-full rounded" v-bind:src="'https://app.ohko.org/assets/' + anime.featured_image" />
                </section>
                <section class="anime-info-container w-8/12">
                    <h3 class="text-md font-fragment uppercase">{{ anime.title }}</h3>
                    <h4 class="text-md font-fragment uppercase">{{ anime.title_jp }}</h4>
                    <!-- <p class="text-md">{{ anime.description }}</p> -->
                    <section class="completion">
                        <p v-if="anime.completion === 'Completed'" class="text-radioactive">{{anime.completion}}</p>
                        <p v-if="anime.completion === 'Hiatus'" class="text-infrared">{{anime.completion}}</p>
                        <p v-if="anime.completion === 'Ongoing'" class="text-sunflower">{{anime.completion}}</p>
                    </section>
                </section>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
const { getItems } = useDirectusItems()

const animes = await getItems({ collection: 'anime' })
</script>

<style>
</style>
