<template>
    <section id="menu-btn-container" class="">
        <Icon
            id="menu-icon"
            class="text-neutral-200 bg-neutral-700 hover:bg-infrared rounded-full p-1"
            name="pixelarticons:loader"
            @click="toggleMenu"
            size="3rem"
        ></Icon>
    </section>
    <div v-if="showMenu" id="menu" class="bg-neutral-400 dark:bg-neutral-900 dark:text-neutral-100">
        <section class="close-btn-container">
            <Icon
                id="close-icon"
                class="text-neutral-200 bg-neutral-700 hover:bg-infrared rounded-full p-1"
                name="pixelarticons:loader"
                @click="toggleMenu"
                size="3rem"
            ></Icon>
        </section>
        <nav class="font-fragment">
            <AccountLinks />
            <ToggleMenuLinks />
            <SocialLinks />
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
            if (this.showMenu) {
                this.disableScroll()
            } else {
                this.enableScroll()
            }
        },
    }
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

#close-icon,
#menu-icon {
    z-index: 999;
    cursor: pointer;
}
#close-icon:hover,
#menu-icon:hover {
    color: #ff2147;
}

#menu {
    position: fixed;
    top: -10;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
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
</style>
