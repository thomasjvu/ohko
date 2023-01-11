<template>
    <div class="flex items-center justify-center">
        <Icon
            id="profile-icon"
            name="pixelarticons:user"
            @click="isModalOpen = true"
            class="mt-2"
            variant="primary"
            size="1.75rem"
            >My Account</Icon
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

<style>
#profile-icon {
    color: var(--black);
    cursor: pointer;
}
</style>
