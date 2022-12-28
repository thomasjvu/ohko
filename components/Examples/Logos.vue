<template>
    <div class="grid max-w-4xl grid-cols-1 gap-8 py-12 mx-auto md:grid-cols-2">
        <div>
            <div class="prose prose-lg font-fragment dark:prose-invert">
                <h3 class="font-fugaz">OHKO (Organization)</h3>
                <p class="text-justify">
                    OHKO is a video game organization that aims to be a
                    community-serving platform comprised of multiple
                    subsidiaries.
                </p>
                <h3 class="font-fugaz">OHKO (Media Platform)</h3>
                <p class="text-justify">
                    The main OHKO application is the media platform. It is a web
                    application that enables anyone to generate revenue from the
                    content they create
                </p>
                <h3 class="font-fugaz">OHKO (Free Market)</h3>
                <p class="text-justify">The OHKO Free Market is a place where anyone
                can set up downloads for their digital products.</p>
                <h3 class="font-fugaz">OHKO (eSports)</h3>
                <p>
                    An Open Esports Organization where anyone can compete in
                    matches and become the top dog.
                </p>
                <h3 class="font-fugaz">OHKO (Job Board)</h3>
                <p>
                    is a job board for the anime &amp; gaming industry, where
                    companies can recruit the best entry-level talent for their
                    work.
                </p>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-4 mt-4">
            <NuxtLink
                v-for="logo in logos"
                :key="logo.name"
                :to="logo.link"
                class="relative flex items-center justify-center col-span-1 p-8 overflow-hidden rounded-lg group md:col-span-2 lg:col-span-1 bg-gray-50 dark:brightness-90 border-2"
                target="_blank"
            >
                <div
                    class="absolute inset-0 flex items-center justify-center transition duration-300 group-hover:bg-white group-hover:bg-opacity-75"
                >
                    <span
                        class="px-4 py-2 text-3xl font-bold text-transparent transition duration-300 rounded-tr-lg rounded-bl-lg group-hover:bg-primary-100 group-hover:text-primary-700 dark:group-hover:bg-primary-800 dark:group-hover:text-primary-200"
                        >Visit →</span
                    >
                </div>
                <img class="object-contain" :src="logo.src" alt="logo.name" />
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
const logos = [
    {
        name: 'OHKO',
        src: '/logos/ohko.svg',
        link: 'https://alpha.ohko.org',
    },
    {
        name: 'OHKO Marketplace',
        src: '/logos/ohko-free-market.svg',
        link: '#',
    },
    {
        name: 'OHKO eSports',
        src: '/logos/ohko-esports.svg',
        link: '#',
    },
    {
        name: 'OHKO Jobs',
        src: '/logos/ohko-job-board.svg',
        link: 'https://jobs.ohko.org',
    },
]
</script>
