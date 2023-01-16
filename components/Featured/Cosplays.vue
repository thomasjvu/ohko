<template>
    <section class="featured-section">
        <h2 class="featured-title text-7xl font-monogram font-bold">Featured Cosplays</h2>
            <section class="carousel">
                <section>
                    <img class="rounded-md w-64" src="https://res.cloudinary.com/dlcz9y0nv/image/upload/v1673418842/nami-ai.png_vhr0tj.png">
                    <h4 class="font-fragment text-center">Content Description</h4>
                </section>
                <section>
                    <img class="rounded-md w-64" src="https://res.cloudinary.com/dlcz9y0nv/image/upload/v1673418842/nami-ai.png_vhr0tj.png">
                    <h4 class="font-fragment text-center">Content Description</h4>
                </section>
                <section>
                    <img class="rounded-md w-64" src="https://res.cloudinary.com/dlcz9y0nv/image/upload/v1673418842/nami-ai.png_vhr0tj.png">
                    <h4 class="font-fragment text-center">Content Description</h4>
                </section>
                <section>
                    <img class="rounded-md w-64" src="https://res.cloudinary.com/dlcz9y0nv/image/upload/v1673418842/nami-ai.png_vhr0tj.png">
                    <h4 class="font-fragment text-center">Content Description</h4>
                </section>
            </section>
            <section class="more-section">
                <h3 class="featured-subtitle text-4xl font-monogram font-bold">More Cosplays</h3>
                <section>
                    <section class="more-content">
                        <section>
                            <img class="rounded-md w-36" src="https://res.cloudinary.com/dlcz9y0nv/image/upload/v1673418842/nami-ai.png_vhr0tj.png">
                        </section>
                        <section>
                            <h5>Title</h5>
                            <p>Description</p>
                        </section>
                    </section>
                    <section class="more-content">
                        <section>
                            <img class="rounded-md w-36" src="https://res.cloudinary.com/dlcz9y0nv/image/upload/v1673418842/nami-ai.png_vhr0tj.png">
                        </section>
                        <section>
                            <h5>Title</h5>
                            <p>Description</p>
                        </section>
                    </section>
                    <section class="more-content">
                        <section>
                            <img class="rounded-md w-36" src="https://res.cloudinary.com/dlcz9y0nv/image/upload/v1673418842/nami-ai.png_vhr0tj.png">
                        </section>
                        <section>
                            <h5>Title</h5>
                            <p>Description</p>
                        </section>
                    </section>
            </section>
        </section>
    </section>
</template>

<script>
</script>

<style>
.featured-section {
    margin-top: 50px;
}
.featured-title {
    border-bottom: 3px solid black;
    margin-bottom: 15px;
}
.featured-subtitle {
    margin: 35px 0 5px 0;
}
.carousel {
    display: flex;
    gap: 25px;
}

.more-section {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-flow: column;
}
.more-content {
    display: flex;
    align-items: center;
    gap: 25px;
    margin: 10px 0;
}
</style>
