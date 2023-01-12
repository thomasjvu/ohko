<template>
    <div class="main-container">
        <Logo />
        <h2 class="text-5xl font-fragment text-center">Partner Program</h2>
        <section class="about-container">
            <h3 class="text-4xl font-fragment">About</h3>
            <p class="text-xl font-fragment">The OHKO Partner Program is a way for players to earn money from their content.</p>
        </section>
        <section class="about-container">
            <h3 class="text-4xl font-fragment">Eligibility</h3>
            <p class="text-xl font-fragment">To become eligible for the partner program, you must publish at least 10 articles.</p>
            <p class="text-xl font-fragment">After you've published at least 10 articles, you can applly for the partner program at this <a href="#">link</a>.</p>
        </section>
    </div>
</template>

<script setup>
const title = 'Partner Program'

useHead({
    title: title + ' | OHKO',
})
</script>

<style>
.main-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
}
</style>
