<template>
    <section id="menu-links" class="flex flex-col text-black dark:text-white">
        <NuxtLink class="menu-link" to="/">Home</NuxtLink>
        <NuxtLink class="menu-link" to="/about">About</NuxtLink>
        <NuxtLink class="menu-link" to="/account">Account</NuxtLink>
        <NuxtLink class="menu-link" to="/articles">Articles</NuxtLink>
        <NuxtLink class="menu-link" to="/reviews">Reviews</NuxtLink>
        <NuxtLink class="menu-link" to="/guides">Guides</NuxtLink>
        <NuxtLink class="menu-link" to="/memes">Memes</NuxtLink>
        <NuxtLink class="menu-link" to="/store">Store</NuxtLink>
        <NuxtLink id="login-menu-link" class="menu-link" to="/login">Login</NuxtLink>
    </section>
</template>

<script>
</script>

<style>
.menu-link:hover {
    color: #ff2147;
    text-decoration: line-through;
}

#login-menu-link {
    color: #ff2147;
}
</style>


