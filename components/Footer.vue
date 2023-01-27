<template>
    <footer class="relative md:flex md:justify-between bg-neutral-400 dark:bg-neutral-700 rounded-lg shadow-md">
        <!-- Left-Side -->
        <div class="p-8">
            <NuxtLink to="/">
                <h3 class="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 font-VCR mb-2">OHKO | ONE-HIT KNOCKOUT!</h3>
            </NuxtLink>
            <h4 class="text-xl font-fragment font-extrabold text-neutral-900 dark:text-neutral-300">
                Earn <span class="text-radioactive">$$$</span> for Creating Anime & Video Game Content
            </h4>
            <div class="mt-4 font-bold font-fragment">
                <p class="text-neutral-900 dark:text-neutral-300">©2023 OHKO. All Rights Reserved.</p>
            </div>
        </div>

        <!-- Right-Side -->
        <div class="flex items-center justify-end p-4 space-x-2">
            <ModalsMyProfile />
            <NuxtLink to="/monetization" class="p-1 mt-2 dark:text-neutral-100">
                <Icon name="pixelarticons:coin" size="1.75rem" />
            </NuxtLink>
            <ExamplesDarkModeToggle />
        </div>
    </footer>
</template>

<script></script>

<style></style>
