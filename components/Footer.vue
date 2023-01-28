<template>
    <footer class="">
        <!-- Popout Container -->
        <div class="relative md:flex md:justify-between bg-neutral-400 dark:bg-neutral-700 rounded-lg shadow-md">
            <!-- Left-Side -->
            <section class="p-8">
                <NuxtLink to="/">
                    <h3 class="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 font-VCR mb-2">OHKO | ONE-HIT KNOCKOUT!</h3>
                </NuxtLink>
                <h4 class="text-xl font-fragment font-extrabold text-neutral-900 dark:text-neutral-300">
                    Create Content, Earn <span class="text-radioactive">$$$</span>
                </h4>
                <div class="mt-4 font-bold font-fragment">
                    <p class="text-neutral-900 dark:text-neutral-300">©2023 OHKO.</p>
                </div>
            </section>

            <!-- Right-Side -->
            <section class="flex items-center justify-end px-4 pb-4 space-x-2">
                <ModalsMyProfile />
                <NuxtLink to="/monetization" class="p-1 mt-2 dark:text-neutral-100">
                    <Icon name="pixelarticons:coin" size="1.75rem" />
                </NuxtLink>
                <ExamplesDarkModeToggle />
            </section>
        </div>
        <!-- Secondary Container -->
        <div class="my-5 text-neutral-400 dark:text-neutral-700">
            <section class="footer-company-links flex items-center justify-between uppercase">
                <p class="font-VCR">Company:</p>
                <section class="font-fragment">
                    <NuxtLink to="#" class="hover:text-neutral-700 dark:hover:text-neutral-100 ml-5">/ Store</NuxtLink>
                    <NuxtLink to="#" class="hover:text-neutral-700 dark:hover:text-neutral-100 ml-5">/ Careers</NuxtLink>
                    <NuxtLink to="#" class="hover:text-neutral-700 dark:hover:text-neutral-100 ml-5">/ Job Board</NuxtLink>
                </section>
            </section>
            <section class="footer-social-links flex items-center justify-between uppercase">
                <p class="font-VCR">Socials:</p>
                <section class="font-fragment">
                    <NuxtLink to="https://discord.gg/77h3N3gfrW" target="_blank" class="ml-5 hover:text-neutral-700 dark:hover:text-neutral-100">[ Discord ]</NuxtLink>
                    <NuxtLink to="https://twitch.tv/ohko_org" target="_blank" class="ml-5 hover:text-neutral-700 dark:hover:text-neutral-100">[ Twitch ]</NuxtLink>
                    <NuxtLink to="https://twitter.com/ohko_org" target="_blank" class="ml-5 hover:text-neutral-700 dark:hover:text-neutral-100">[ Twitter ]</NuxtLink>
                </section>
            </section>
            <!-- <section class="footer-company-links flex items-center justify-between uppercase"> -->
            <!--     <p class="font-VCR">Policys:</p> -->
            <!--     <section class="font-fragment"> -->
            <!--         <NuxtLink to="#" class="hover:text-neutral-700 dark:hover:text-neutral-100 ml-5">/ Monetization</NuxtLink> -->
            <!--         <NuxtLink to="#" class="hover:text-neutral-700 dark:hover:text-neutral-100 ml-5">/ TOS</NuxtLink> -->
            <!--         <NuxtLink to="#" class="hover:text-neutral-700 dark:hover:text-neutral-100 ml-5">/ Privacy</NuxtLink> -->
            <!--     </section> -->
            <!-- </section> -->
        </div>
    </footer>
</template>

<script></script>

<style></style>
