<template>
    <div class="relative max-w-4xl px-6 pt-12 pb-12 mx-auto space-y-8">
        <VHeader />
        <div>
            <VAlert type="warning" class="font-fragment">
                <strong>Alert:</strong>
                This is a demo of the OHKO (One-hit Knockout!) app. Nothing is
                final.
            </VAlert>
            <h2
                class="mt-10 text-3xl font-fugaz uppercase font-extrabold text-transparent text-gray-900 sm:text-3xl infrared"
            >
                About Us
            </h2>
            <ExamplesLogos />
        </div>
        <VFooter />
        <VCredits />
    </div>
</template>

<script setup>
const title = 'About'

useHead({
    title: title + ' | OHKO',
})
</script>

<style></style>
