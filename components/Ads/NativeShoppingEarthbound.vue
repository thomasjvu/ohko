<template>
    <div>
        <div id="adimage"></div>
    </div>
    <h3>Advertising Space</h3>
</template>

<script>
import postscribe from "postscribe"
export default {
    name: "amazon advertisement",
    mounted: function() {
        postscribe(
            "adimage",
            `<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=e918c596-26b4-4ed1-8880-49f9dd2169d8"></script>`
            )
    }
}
</script>

<style>
</style>
