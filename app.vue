<template>
    <Sidebar />
    <ToggleMenu />
    <main class="bg-neutral-300 dark:bg-neutral-900">
        <div id="page-container" class="relative max-w-7xl px-6 pt-12 pb-12 mx-auto space-y-8">
            <NuxtLayout>
                <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#ff2147 0%,#797979 100%)" />
                <NuxtPage />
            </NuxtLayout>
            <Footer />
        </div>
    </main>
</template>

<script setup>
</script>

<style>
main {
    margin-left: 10%;
}
/* Responsive */
@media (max-width: 768px) {
    main {
        margin-left: 0%;
    }
}
</style>
