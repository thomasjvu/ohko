<template>
    <section class="sidebar">
        <nav>
            <a href="/" class="flex flex-center items-center justify-center align-center">
                <img class="grow" src="../assets/img/ohko-transparent.png" />
            </a>
            <ul class="">
                <li>
                    <a class="font-fragment side-more" href="#">
                        <Icon
                            class="sidebar-icon"
                            name="ph:magnifying-glass-fill"
                        />Search...</a
                    >
                </li>
                <li>
                    <a class="font-fragment side-create" href="/create/article">Create</a>
                </li>
                <!-- <li> -->
                <!--     <a class="font-fragment side-more" href="/explore" -->
                <!--         >Explore...</a -->
                <!--     > -->
                <!-- </li> -->
                <li>
                    <a class="font-fragment side-cat bg-dark-platinum line-through" href="#">Art</a>
                </li>
                <li>
                    <a class="font-fragment side-cat bg-platinum" href="/articles"
                        >Articles</a
                    >
                </li>
                <li>
                    <a class="font-fragment side-cat bg-dark-platinum line-through" href="#">Guides</a>
                </li>
                <li>
                    <a class="font-fragment side-cat bg-dark-platinum line-through" href="#">Memes</a>
                </li>
                <li>
                    <a class="font-fragment side-cat bg-dark-platinum line-through" href="#"
                        >Reviews</a
                    >
                </li>
                <li>
                    <a class="font-fragment side-cat bg-dark-platinum line-through" href="#"
                        >Cosplay</a
                    >
                </li>
                <li>
                    <a class="font-fragment side-cat bg-dark-platinum line-through" href="#"
                        >Fan-Fiction</a
                    >
                </li>
            </ul>
        </nav>
        <section class="sidebar-footer">
            <section>
                <h3 class="font-VCR font-bold text-center">
                    OHKO
                </h3>
            </section>
            <section class="sidebar-account">
                <a href="/login" class="btn login-btn uppercase">Account</a>
                <a href="/signup" class="btn signup-btn uppercase">Signup</a>
            </section>
        </section>
    </section>
</template>

<script></script>

<style>
.sidebar {
    background: var(--darker);
    color: white;
    position: fixed;
    width: 10%;
    max-width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: column;
    padding: 20px 0;
}

.sidebar h3 {
}

.sidebar img {
    width: 5vw;
    margin: 0 auto;
}

.sidebar ul {
    font-size: 1vw;
}

.sidebar a {
    display: inline-block;
    width: 8vw;
    margin: 10px 0;
}

/*Sidebar Icons */
.sidebar-icon {
    font-size: 0.75vw;
    margin-right: 0.25vw;
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
    color: #111;
    padding: 10px;
    border-radius: 5px;
    text-align: left;
}

.side-cat:hover {
    background: #e5e4e2;
}

/* Fix Buttons Later */

.sidebar-account {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5vw;
}

.login-btn {
    font-size: 0.65vw;
    width: 4vw !important;
    text-align: center;
}

.signup-btn {
    font-size: 0.65vw;
    width: 4vw !important;
    background: var(--dark-platinum) !important; /*fix this later */
    text-align: center;
}

/* Responsive */
@media (max-width: 1000px) {
    .sidebar {
        display: none;
        visibility: hidden;
    }
}
</style>
