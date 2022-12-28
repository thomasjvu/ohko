<template>
    <div class="relative max-w-4xl px-6 pt-12 pb-12 mx-auto space-y-8">
        <VLogo />
        <header
            class="relative overflow-hidden bg-infrared shadow-primary-600 rounded-md"
        >
            <div class="md:flex md:justify-between">
                <h1
                    class="px-8 py-6 mt-3 text-4xl font-fugaz font-extrabold text-white"
                >
                    {{ title }}
                </h1>
                <div class="flex items-center justify-end p-4 space-x-2">
                    <NuxtLink
                        to="https://alpha.ohko.org/"
                        target="_blank"
                        class="p-1 mt-2 dark:text-primary-200 dark:hover:text-primary-400 text-primary-700 hover:text-primary-900"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#fff"
                                d="M6 2h12v2H6V2zM4 6V4h2v2H4zm0 12V6H2v12h2zm2 2v-2H4v2h2zm12 0v2H6v-2h12zm2-2v2h-2v-2h2zm0-12h2v12h-2V6zm0 0V4h-2v2h2zm-9-1h2v2h3v2h-6v2h6v6h-3v2h-2v-2H8v-2h6v-2H8V7h3V5z"
                            />
                        </svg>
                    </NuxtLink>
                    <ExamplesDarkModeToggle
                        class="text-primary-200 hover:text-primary-400"
                    />
                </div>
            </div>
            <div class="w-full h-4 bg-infrared" />
        </header>

        <div>
            <VAlert type="warning" class="font-fragment">
                <strong>Alert:</strong>
                This is a demo of the OHKO (One-hit Knockout!) application.
            </VAlert>
            <ExamplesLogos />
        </div>

        <div
            id="examples"
            class="relative flex-1 divide-y-2 divide-gray-200 dark:divide-gray-800"
        >
            <h2
                class="pb-6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-pink-600"
            >
                Examples of Functionality
            </h2>
            <ExamplesContent id="content" class="py-12" />
            <ExamplesAuth id="authentication" class="py-12" />
            <ExamplesApiRoutes id="api" class="py-12" />
        </div>
        <div
            id="components"
            class="relative flex-1 divide-y-2 divide-gray-200 dark:divide-gray-800"
        >
            <h2
                class="pb-6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-700 to-pink-600"
            >
                Demo of Components
            </h2>
            <ExamplesComponents />
        </div>
        <VFooter />
        <VCredits />
    </div>
</template>

<script setup>
const title = 'OHKO User Panel'
useHead({
    title: title,
})
</script>
