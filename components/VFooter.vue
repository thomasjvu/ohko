<template>
    <footer
        class="relative md:flex md:justify-between rounded-md border-2 border-black dark:border-white shadow-md"
    >
        <div class="p-8">
            <NuxtLink to="/">
                <h3 class="text-4xl font-extrabold text-black dark:text-white font-fugaz">
                    OHKO { One-hit Knockout! } 
                </h3>
            </NuxtLink>
            <div
                class="mt-4 text-gray-900 font-bold font-fragment dark:text-gray-50"
            >
                <NuxtLink to="https://twitter.com/ohko_org" target="_blank"
                    >@OHKO_ORG</NuxtLink
                >
                <p>© 2023 OHKO. All Rights Reserved</p>
            </div>
        </div>

        <div class="flex items-center justify-end p-4 space-x-2">
            <NuxtLink to="/login">
                <Icon
                    name="pixelarticons:human-handsup"
                    color="#ff2147"
                    width="1.75rem"
                    height="1.75rem"
                    class="mt-2"
                />
            </NuxtLink>
            <NuxtLink
                to="https://ohko.org/"
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
                        fill="#ff2147"
                        d="M6 2h12v2H6V2zM4 6V4h2v2H4zm0 12V6H2v12h2zm2 2v-2H4v2h2zm12 0v2H6v-2h12zm2-2v2h-2v-2h2zm0-12h2v12h-2V6zm0 0V4h-2v2h2zm-9-1h2v2h3v2h-6v2h6v6h-3v2h-2v-2H8v-2h6v-2H8V7h3V5z"
                    />
                </svg>
            </NuxtLink>
            <ExamplesDarkModeToggle />
        </div>
    </footer>
</template>

<script>
</script>

<style>
</style>
