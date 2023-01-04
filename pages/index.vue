<template>
    <VHeader />
    <div class="relative max-w-4xl px-6 pt-12 pb-12 mx-auto space-y-8">
        <AlertsDemoAlert />
        <div class="flex flex-col sm:flex-row justify-between gap-5 font-fragment">
            <NuxtLink to="/articles" class="w-full sm:w-1/4">
                <section
                    id="view-articles" class="category bg-neutral-900 dark:text-white h-1/6 sm:h-60 hover:shadow-xl hover:bg-neutral-800 flex items-center justify-center text-center"
                >
                <h3 class="text-2xl">📰 <br /> Articles</h3>
                </section>
            </NuxtLink>
            <NuxtLink to="/guides" class="w-full sm:w-1/4">
                <section
                    class="category bg-neutral-900 dark:text-white h-1/6 sm:h-60 hover:shadow-xl hover:bg-neutral-800 flex items-center justify-center text-center"
                >
                <h3 class="text-2xl">🦮 <br /> Guides</h3>
                </section>
            </NuxtLink>
            <NuxtLink to="/reviews" class="w-full sm:w-1/4">
                <section
                    class="category bg-neutral-900 dark:text-white h-1/6 sm:h-full hover:shadow-xl hover:bg-neutral-800 flex items-center justify-center text-center"
                >
                <h3 class="text-2xl">⭐ <br /> Reviews</h3>
                </section>
            </NuxtLink>
            <NuxtLink to="#" class="w-full sm:w-1/4">
                <section
                    id="view-memes" class="category bg-neutral-900 dark:text-white h-1/6 sm:h-full hover:shadow-xl hover:bg-neutral-800 flex items-center justify-center text-center"
                >
                <h3 class="text-2xl">💩 <br /> Memes</h3>
                </section>
            </NuxtLink>
        </div>
        <!-- <ExamplesContent id="content" class="py-12" /> -->
        <!-- Create Content -->
        <ExamplesCreateContent />
        <!-- User Modal -->
        <VFooter />
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
