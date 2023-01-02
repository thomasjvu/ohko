<template>
    <section id="menu-btn-container" class="">
        <Icon
            id="menu-button"
            name="pixelarticons:align-justify"
            @click="toggleMenu"
            color="#ff2147"
            size="3rem"
        ></Icon>
    </section>
    <div v-if="showMenu" id="menu" class="">
        <section class="close-btn-container">
            <Icon
                id="close-icon"
                name="pixelarticons:align-right"
                @click="toggleMenu"
                color="#ff2147"
                size="3rem"
            ></Icon>
        </section>
        <section id="logo-container" class="">
            <a href="/" class="flex items-center justify-center">
                <img src="~/assets/img/ohko-transparent.png" class="w-1/12" />
            </a>
        </section>
        <nav class="font-fragment">
            <section id="menu-links" class="flex flex-col text-white">
                <NuxtLink class="menu-link" to="/">Home</NuxtLink>
                <nuxt-link class="menu-link" to="/about">About</nuxt-link>
                <nuxt-link class="menu-link" to="/articles">Articles</nuxt-link>
                <nuxt-link class="menu-link" to="/reviews">Reviews</nuxt-link>
                <nuxt-link class="menu-link" to="/guides">Guides</nuxt-link>
                <nuxt-link class="menu-link" to="/memes">Memes</nuxt-link>
                <nuxt-link class="menu-link" to="/store">Store</nuxt-link>
            </section>
            <section class="social-links">
                <a href="https://ohko.org" target="_blank">
                    <Icon
                        id="social-icon"
                        name="pixelarticons:money"
                        color="#ff2147"
                    ></Icon>
                </a>
                <a href="https://www.buymeacoffee.com/ohko" target="_blank">
                    <Icon
                        id="social-icon"
                        name="pixelarticons:coffee-alt"
                        color="#ff2147"
                    ></Icon>
                </a>
            </section>
            <section class="links">
                <div class="flex items-center justify-end p-4 space-x-2">
                    <NuxtLink to="/login">
                        <Icon
                            name="pixelarticons:human-handsup"
                            color="white"
                            width="1.75rem"
                            height="1.75rem"
                            class="mt-2"
                        />
                    </NuxtLink>
                    <NuxtLink
                        to="https://alpha.ohko.org/"
                        target="_blank"
                        class="p-1 mt-2 dark:text-primary-200 dark:hover:text-primary-400 text-primary-700 hover:text-primary-900"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#fff"
                                d="M6 2h12v2H6V2zM4 6V4h2v2H4zm0 12V6H2v12h2zm2 2v-2H4v2h2zm12 0v2H6v-2h12zm2-2v2h-2v-2h2zm0-12h2v12h-2V6zm0 0V4h-2v2h2zm-9-1h2v2h3v2h-6v2h6v6h-3v2h-2v-2H8v-2h6v-2H8V7h3V5z"
                            />
                        </svg>
                    </NuxtLink>
                    <ExamplesDarkModeToggle />
                </div>
            </section>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false,
        }
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu
        },
    },
}
</script>

<style>
#menu-btn-container {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
    margin-right: 20px;
}

#menu-btn {
    /* position: relative; */
    font-size: 3rem;
    cursor: pointer;
}

/*
header {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
*/
#menu {
    position: fixed;
    top: -10;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    background-color: black;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: column;
    gap: 25px;
}

.close-btn-container {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100vw;
    margin-top: 10px;
    margin-right: 50px;
}
#close-icon {
    font-size: 2rem;
    cursor: pointer;
}

nav {
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-flow: column;
    gap: 15px;
    text-transform: uppercase;
    text-align: center;
}
.menu-link:hover {
    color: #ff2147;
    text-decoration: line-through;
}
.social-links {
    display: flex;
    gap: 1vw;
}
.social-icon {
    font-size: 2rem;
}
</style>
