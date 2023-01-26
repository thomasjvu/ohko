<template>
    <section class="sidebar shadow-2xl">
        <nav>
            <a href="/" class="flex flex-center items-center justify-center align-center">
                <img class="grow" src="../assets/img/ohko-transparent.png" />
            </a>
            <ul class="">
                <li>
                    <a class="font-fragment side-more" href="#"> <Icon class="sidebar-icon" name="pixelarticons:search" />Search...</a>
                </li>
                <li>
                    <a class="font-VCR side-create" href="/create/article">Create</a>
                </li>
                <!-- <li> -->
                <!--     <a class="font-fragment side-more" href="/explore" -->
                <!--         >Explore...</a -->
                <!--     > -->
                <!-- </li> -->
                <li>
                    <a class="font-VCR side-cat bg-dark-platinum line-through" href="#">Art</a>
                </li>
                <li>
                    <a class="font-VCR side-cat bg-platinum" href="/articles">Articles</a>
                </li>
                <li>
                    <a class="font-VCR side-cat bg-dark-platinum line-through" href="#">Guides</a>
                </li>
                <li>
                    <a class="font-VCR side-cat bg-dark-platinum line-through" href="#">Memes</a>
                </li>
                <li>
                    <a class="font-VCR side-cat bg-dark-platinum line-through" href="#">Reviews</a>
                </li>
                <li>
                    <NuxtLink class="font-VCR side-cat bg-dark-platinum text-neutral-200" to="#">Fan-Fiction</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="font-VCR side-cat bg-piracy text-neutral-200" to="/anime">Anime</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="font-VCR side-cat bg-infrared text-neutral-200" to="/videogames">Video Games</NuxtLink>
                </li>
                <!-- <li> -->
                <!--     <NuxtLink class="font-VCR side-cat bg-radioactive text-neutral-200" to="/originals">Originals</NuxtLink> -->
                <!-- </li> -->
            </ul>
        </nav>
        <section class="sidebar-footer">
            <!-- <section> -->
            <!--     <h3 class="font-VCR font-bold text-center"> -->
            <!--         OHKO -->
            <!--     </h3> -->
            <!-- </section> -->
            <section class="sidebar-account">
                <a v-if="!isLoggedIn" href="/signup" class="btn signup-btn uppercase">Signup</a>
                <a v-if="!isLoggedIn" href="/login" class="btn login-btn uppercase">Login</a>

                <a v-if="isLoggedIn" href="/account" class="btn account-btn uppercase">Account</a>
                <a v-if="isLoggedIn" @click="auth.logout()" class="btn logout-btn uppercase">Logout</a>
            </section>
        </section>
    </section>
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
    align-items: center;
    justify-content: space-between;
    flex-flow: column;
    padding: 10px 0;
}

.sidebar h3 {
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

/*Sidebar Icons */
.sidebar-icon {
    font-size: 1.5rem;
    margin-right: 1.5rem;
}

/* Sidebar Create */
.side-create {
    color: #111;
    background: #ff2147;
    padding: 10px;
    border-radius: 5px;
    text-align: left;
}
.side-more:hover {
    color: #fff;
    background: #797979;
    padding: 10px;
    border-radius: 5px;
}

/* Sidebar More (Search, Discover, etc.) */
.side-more {
    color: #111;
    background: white;
    padding: 10px;
    border-radius: 5px;
    text-align: left;
}
.side-more:hover {
    color: #fff;
    background: #797979;
    padding: 10px;
    border-radius: 5px;
}

/* Sidebar Categories */
.side-cat {
    padding: 10px;
    border-radius: 5px;
    text-align: left;
}

.side-cat:hover {
    background: #e5e4e2;
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
@media (max-width: 1000px) {
    .sidebar {
        display: none;
        visibility: hidden;
    }
}
</style>
