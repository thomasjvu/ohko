<template>
    <footer
        class="relative md:flex md:justify-between rounded-md shadow-md"
    >
        <div class="p-8">
            <NuxtLink to="/">
                <h3 class="text-2xl sm:text-3xl font-extrabold text-black dark:text-white font-fugaz">
                    OHKO { One-hit K.O! } 
                </h3>
            </NuxtLink>
            <div
                class="mt-4 text-gray-900 font-bold font-fragment dark:text-gray-50"
            >
                <NuxtLink to="https://twitter.com/ohko_org" target="_blank"
                    >@OHKO_ORG</NuxtLink
                >
                <p>©2023 OHKO. All Rights Reserved.</p>
            </div>
        </div>

        <div class="flex items-center justify-end p-4 space-x-2">
            <ModalsMyProfile />
            <NuxtLink
                to="https://ohko.org/"
                target="_blank"
                class="p-1 mt-2 dark:text-primary-200 dark:hover:text-primary-400 text-primary-700 hover:text-primary-900"
            >
            <Icon name="pixelarticons:coin" size="1.75rem" />
            </NuxtLink>
            <ExamplesDarkModeToggle />
        </div>
    </footer>
</template>

<script>
</script>

<style>
footer {
    border: 2px solid #ff2147;
}
</style>
