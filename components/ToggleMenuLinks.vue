<template>
    <section id="menu-links" class="flex flex-col text-neutral-900 dark:text-neutral-100">
        <NuxtLink class="menu-link" to="/">Home</NuxtLink>
        <NuxtLink class="menu-link" to="/about">About</NuxtLink>
        <NuxtLink class="menu-link" to="/account">Account</NuxtLink>
        <NuxtLink class="menu-link" to="/create/article">Create</NuxtLink>
        <NuxtLink class="menu-link line-through" to="#">Articles</NuxtLink>
        <NuxtLink class="menu-link line-through" to="#">Reviews</NuxtLink>
        <NuxtLink class="menu-link line-through" to="#">Guides</NuxtLink>
        <NuxtLink class="menu-link line-through" to="#">Memes</NuxtLink>
        <NuxtLink id="login-menu-link" class="menu-link" to="/login">Login</NuxtLink>
    </section>
</template>

<script>
</script>

<style>

.menu-link {
    margin: 10px;
    max-width: 100%;
    border-radius: 5px;
    padding: 5px 10px;
    background: var(--dark-platinum);
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


