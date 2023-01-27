<template>
    <div class="sidebar shadow-2xl">
        <nav>
            <NuxtLink to="/" class="flex flex-center items-center justify-center align-center">
                <img class="grow" src="../assets/img/ohko-transparent.png" />
            </NuxtLink>
            <ul class="sidebar-links">
                <!-- Search -->
                <li class="sidebar-link">
                    <NuxtLink class="side-cat font-VCR bg-neutral-100 px-5 rounded-lg text-left" to="#">
                        <span> <Icon class="sidebar-icon" name="pixelarticons:search" />Search...</span>
                    </NuxtLink>
                </li>
                <!-- Create -->
                <li class="sidebar-link">
                    <NuxtLink class="side-cat font-VCR bg-infrared px-5 rounded-lg text-left">
                        <span>
                            <Icon name="pixelarticons:plus" class="" />
                            Create
                        </span>
                    </NuxtLink>
                </li>
                <!-- Articles -->
                <li class="sidebar-link">
                    <NuxtLink to="/articles" class="side-cat font-VCR bg-platinum rounded-lg text-left px-5">
                        <span> Articles </span>
                    </NuxtLink>
                </li>
                <!-- Reviews -->
                <li class="sidebar-link">
                    <NuxtLink to="/reviews" class="side-cat font-VCR bg-platinum rounded-lg text-left px-5">
                        <span> Reviews </span>
                    </NuxtLink>
                </li>
                <!-- Memes -->
                <li class="sidebar-link">
                    <NuxtLink to="#" class="font-VCR bg-neutral-700 rounded-lg text-left px-5">
                        <span> Memes </span>
                    </NuxtLink>
                </li>
                <!-- Divider -->
                <div class="border-b border-neutral-700 my-5 mx-5"></div>
                <!-- Type: Anime -->
                <li class="sidebar-link">
                    <NuxtLink to="/anime" class="side-cat font-VCR bg-sunflower rounded-lg text-left px-5">
                        <span> Anime </span>
                    </NuxtLink>
                </li>
                <!-- Type: Videogames -->
                <li class="sidebar-link">
                    <NuxtLink to="/videogames" class="side-cat font-VCR bg-infrared rounded-lg text-left px-5">
                        <span> Videogames </span>
                    </NuxtLink>
                </li>
                <!-- Type: Originals -->
                <!-- <li class="sidebar-link"> -->
                <!--     <NuxtLink to="#" class="side-cat font-VCR bg-radioactive rounded-lg text-left px-5"> -->
                <!--         <span> Originals </span> -->
                <!--     </NuxtLink> -->
                <!-- </li> -->
            </ul>
        </nav>
        <!-- Account Options -->
        <section class="sidebar-footer">
            <section class="sidebar-account">
                <NuxtLink v-if="!isLoggedIn" href="/signup" class="btn font-VCR signup-btn uppercase">Signup</NuxtLink>
                <NuxtLink v-if="!isLoggedIn" href="/login" class="btn font-VCR login-btn uppercase">Login</NuxtLink>

                <NuxtLink v-if="isLoggedIn" href="/account" class="btn font-VCR account-btn uppercase">Account</NuxtLink>
                <NuxtLink v-if="isLoggedIn" @click="auth.logout()" class="btn font-VCR logout-btn uppercase">Logout</NuxtLink>
            </section>
        </section>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useAuth } from '~~/store/auth'

const auth = useAuth()
const { fileUrl } = useFiles()
const { isLoggedIn, user } = storeToRefs(auth)
</script>

<style>
.sidebar {
    background: var(--darker);
    position: fixed;
    width: 20rem;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    padding: 5px 0;
}

.sidebar img {
    width: 10rem;
    margin: 0 auto;
}

.sidebar ul {
    font-size: 1.75rem;
}

.sidebar a {
    display: inline-block;
    width: 16rem;
    margin: 10px 0;
}

.sidebar span {
    display: inline-block;
    width: 16rem;
    margin: 10px 0;
}

/* Sidebar Icons */
.sidebar-icon {
    font-size: 1.5rem;
    margin-right: 1.25rem;
}

.side-cat:hover {
    background: #797979;
}

.sidebar-account {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

/* Account Buttons */
.login-btn,
.logout-btn {
    font-size: 1.3rem;
    width: 7.5rem !important; /* fix pls */
    color: var(--dark) !important; /* fix pls */
    background: var(--platinum) !important; /* fix pls */
    text-align: center;
}

.signup-btn,
.account-btn {
    font-size: 1.3rem;
    width: 7.5rem !important; /* fix pls */
    color: var(--dark) !important; /* fix pls */
    background: var(--dark-platinum) !important; /* fix pls */
    text-align: center;
}

.login-btn:hover,
.signup-btn:hover,
.account-btn:hover,
.logout-btn:hover {
    background: var(--infrared) !important; /* fix pls */
}

/* Responsive */
@media (max-width: 1024px) {
    .sidebar {
        display: none;
        visibility: hidden;
    }
}
</style>
