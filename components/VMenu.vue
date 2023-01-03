<template>
    <section id="menu-btn-container" class="">
        <Icon
            id="menu-icon"
            name="pixelarticons:align-justify"
            @click="toggleMenu"
            size="3rem"
        ></Icon>
    </section>
    <div v-if="showMenu" id="menu" class="bg-neutral-400 dark:bg-stone-900">
        <section class="close-btn-container">
            <Icon
                id="close-icon"
                name="pixelarticons:align-right"
                @click="toggleMenu"
                size="3rem"
            ></Icon>
        </section>
        <VLogoTransparent />
        <nav class="font-fragment">
            <VAccountLinks />
            <VMenuLinks />
            <VSocialLinks />
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
        disableScroll() {
            document.body.addEventListener('wheel', (e) => {
                e.preventDefault()
            })
        },
        enableScroll() {
            document.body.addEventListener('wheel', (e) => {
                e.preventDefault()
            })
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
    color: #ff2147;
    cursor: pointer;
}
#close-icon:hover,
#menu-icon:hover {
    color: #797979;
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
