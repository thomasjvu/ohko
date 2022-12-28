<template>
    <div class="page h-90">
        <div
            class="
                px-4
                py-16
                mx-auto
                sm:max-w-xl
                md:max-w-full
                lg:max-w-screen-xl
                md:px-24
                lg:px-8 lg:py-20
            "
        >
            <div
                class="
                    max-w-screen-sm
                    sm:text-center sm:mx-auto
                    flex
                    items-center
                    flex-col
                    justify-center
                "
            >
                <h1
                    class="
                        mb-4
                        text-7xl
                        font-bold
                        tracking-tight
                        text-ghost
                        sm:text-8xl sm:leading-none
                    "
                >
                    OHKO
                </h1>
                <h2 class="text-3xl text-ghost md:text-3xl sm:px-4 font-mono">
                    One-hit <span class="knockout text-red">Knockout!</span> Media Platform
                </h2>
                <!-- <p class="text-base text-white md:text-lg sm:px-4 font-mono">One-hit Knockout!</p> -->
            </div>
            <div class="flex flex-col items-center" v-for="post in posts">
                <div
                    class="
                        overflow-hidden
                        transition-shadow
                        duration-300
                        rounded
                        m-5
                        text-center
                        post-block
                        border-solid border-5 border-gray-900
                        w-3/4
                        px-5
                    "
                >
                    <div class="py-5">
                        <p class="mb-2 text-xs font-semibold post-date">
                            {{
                                new Date(post.date_created).toLocaleDateString()
                            }}
                        </p>
                        <NuxtLink
                            :to="`/article/${post.id}`"
                            class="
                                inline-block
                                mt-3
                                mb-3
                                text-red
                                transition-colors
                                duration-200
                                hover:text-red
                            "
                            ><p class="text-2xl font-bold leading-5 text-ghost post-title">
                                {{ post.title }}
                            </p></NuxtLink
                        >
                        <p class="mb-2 text-ghost">
                            {{ post.short_content }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { getItems } = useDirectusItems();

const posts = await getItems({ collection: "articles" });
</script>

<style>

/* Background */
body {
    background-color: #070707;
    opacity: 1;
    background-image: linear-gradient(
            rgba(255, 33, 70, 0.2) 1px,
            transparent 1px
        ),
        linear-gradient(to right, rgba(255, 33, 70, 0.1) 1px, #070707 1px);
    background-size: 20px 20px;
}



/* Post List */
.post-block {
    background: #070707;
    border: 2px solid #f8f8ff;
    box-shadow: 3px 3px 0 #070707, -1px -1px 0 #070707, 1px -1px 0 #070707,
        -1px 1px 0 #070707, 1px 1px 0 #070707;
}

.post-title {
    font-family: "Fugaz One", "Arial", sans-serif;
}

.post-date {
    color: #777777;
    font-family: "Fragment Mono";
}

</style>
