<template>
    <footer class="relative md:flex md:justify-between rounded-md shadow-md">
        <!-- Left-Side -->
        <div class="p-8">
            <NuxtLink to="/">
                <h3
                    class="text-2xl sm:text-3xl font-extrabold text-black font-VCR"
                >
                OHKO | ONE-HIT KNOCKOUT! 
                </h3>
                <h4 class="text-xl font-fragment font-extrabold">
                    Earn <span class="green">$$$</span> for Creating Anime & Video Game
                    Content
                </h4>
            </NuxtLink>
            <div class="mt-4 text-neutral-900 font-bold font-fragment">
                <!-- <NuxtLink to="https://twitter.com/ohko_org" target="_blank" -->
                <!--     >@OHKO_ORG</NuxtLink -->
                <!-- > -->
                <p>©2023 OHKO. All Rights Reserved.</p>
            </div>
        </div>

        <!-- Right-Side -->
        <div class="flex items-center justify-end p-4 space-x-2">
            <ModalsMyProfile />
            <NuxtLink
                to="/monetization"
                class="p-1 mt-2 dark:text-black"
            >
                <Icon name="pixelarticons:coin" size="1.75rem" />
            </NuxtLink>
            <ExamplesDarkModeToggle />
        </div>
    </footer>
</template>

<script></script>

<style>
footer {
    background: #ff2147;
}
</style>
