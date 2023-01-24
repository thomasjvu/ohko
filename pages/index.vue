<template>
    <div>
        <!-- <Hero /> -->
        <!-- <AlertsDemo /> -->
        <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=ohko00-20&language=en_US&marketplace=amazon&region=US&placement=B0BF1W7K23&asins=B0BF1W7K23&linkId=bf950965e26438f45159428454c3f2b6&show_border=true&link_opens_in_new_window=true"></iframe>
        <FeaturedArt />
        <FeaturedArticles />
        <FeaturedArtworks />
        <FeaturedCosplays />
    </div>
</template>

<script setup>

const title = 'Home'

useHead({
    title: title + ' | OHKO',
})
</script>

<style>

.category {
    padding: 25px;
    border-radius: 5px;
    border: 2px solid white;

    color: white;
}

/*
#view-articles {
    background: #ff2147;
}
*/
#view-memes {
    background: #e5e4e2;
    color: black;
}

</style>
