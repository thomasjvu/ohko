<template>
    <div class="relative max-w-4xl px-6 pt-12 pb-12 mx-auto space-y-8">
        <VLogo />
        <ModalsMyAccount />
        <VDemoAlert />
        <div class="flex justify-between gap-5">
            <NuxtLink to="/articles" class="w-1/4">
                <section
                    class="category bg-neutral-900 dark:text-white text-center h-80 hover:shadow-xl hover:bg-neutral-800"
                >
                <h3 class="text-2xl">📰 <br /> Articles</h3>
                </section>
            </NuxtLink>
            <NuxtLink to="/guides" class="w-1/4">
                <section
                    class="category bg-neutral-900 dark:text-white text-center h-80 hover:shadow-xl hover:bg-neutral-800"
                >
                <h3 class="text-2xl">🦮 <br /> Guides</h3>
                </section>
            </NuxtLink>
            <NuxtLink to="/reviews" class="w-1/4">
                <section
                    class="category bg-neutral-900 dark:text-white text-center h-80 hover:shadow-xl hover:bg-neutral-800"
                >
                <h3 class="text-2xl">⭐ <br /> Reviews</h3>
                </section>
            </NuxtLink>
            <NuxtLink to="/memes" class="w-1/4">
                <section
                    class="category bg-neutral-900 dark:text-white text-center h-80 hover:shadow-xl hover:bg-neutral-800"
                >
                <h3 class="text-2xl">💩 <br /> Memes</h3>
                </section>
            </NuxtLink>
        </div>
        <ExamplesContent id="content" class="py-12" />
        <!-- Create Content -->
        <ExamplesCreateContent />
        <!-- User Modal -->
        <VFooter />
        <VCredits />
    </div>
</template>

<script setup>
const title = 'Home'

useHead({
    title: title + ' | OHKO',
})
</script>

<style>
#categories {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.category {
    padding: 25px;
    border-radius: 5px;
    border: 2px solid white;

    color: white;
    font-family: 'Fragment Mono', monospace;
    flex: 1;
}

.null {
    background: #333;
}

</style>
