<template>
    <section id="toggle-menu-links" class="flex flex-col text-neutral-900 dark:text-neutral-100">
        <NuxtLink class="menu-link bg-neutral-700 text-neutral-100 rounded-lg" to="/">Home</NuxtLink>
        <NuxtLink class="menu-link bg-neutral-700 text-neutral-100 rounded-lg" to="/about">About</NuxtLink>
        <NuxtLink class="menu-link bg-neutral-700 text-neutral-100 rounded-lg" to="/account">Account</NuxtLink>
        <NuxtLink class="menu-link bg-neutral-700 text-neutral-100 rounded-lg" to="/articles">Articles</NuxtLink>
        <NuxtLink class="menu-link bg-neutral-700 text-neutral-100 rounded-lg" to="reviews">Reviews</NuxtLink>
        <NuxtLink class="menu-link bg-neutral-800 text-neutral-700 rounded-lg line-through" to="#">Guides</NuxtLink>
        <NuxtLink class="menu-link bg-neutral-800 text-neutral-700 rounded-lg line-through" to="#">Memes</NuxtLink>
        <NuxtLink id="login-menu-link" class="menu-link" to="/login">Login</NuxtLink>
    </section>
</template>

<script></script>

<style>
.menu-link {
    margin: 10px;
    padding: 5px 10px;
}
.menu-link:hover {
    color: var(--darker);
    background: var(--infrared);
}

#login-menu-link {
    background: var(--infrared);
    border-radius: 5px;
    color: var(--darker);
}
</style>
