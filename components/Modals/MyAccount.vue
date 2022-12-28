<template>
    <div class="flex items-center justify-center">
        <VButton @click="isModalOpen = true" class="mt-5" variant="primary"
            >My Account</VButton
        >
        <VModal
            title="My Account"
            :is-open="isModalOpen"
            @close="isModalOpen = false"
            class="font-fragment"
        >
            <div class="prose dark:prose-invert">
                <ExamplesMyAccount id="authentication" class="py-12" />
            </div>
        </VModal>
    </div>
</template>

<script setup>
// Modal
const isModalOpen = ref(false)
</script>

<style></style>
