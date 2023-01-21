<template>
    <div class="profile-card">
        <div class="profile-image">
            <img class="profile-image__border" src="" />
            <!-- <img class="profile-image__img" :src="playerData.image" /> -->
        </div>
        <div>
            <span>Written By</span>
            <h3>{{playerData.name}}</h3>
            <p>{{playerData.bio}}</p>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
/*
import { storeToRefs } from 'pinia'
import { useAuth } from '~~/store/auth'

const auth = useAuth()
const { fileUrl } = useFiles()
const { isLoggedIn, user } = storeToRefs(auth)

console.log('userInfo', user)
*/


const loadPlayerData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'Ultima',
                bio: 'something here',
            })
        }, 4000)
    })
}

export default {
    async setup() {
        const playerData = ref(await loadPlayerData())
        return {
            playerData
        }
    },
}
</script>

<style>
.profile-card {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: #fff;
    overflow: hidden;
    position: relative;
    min-height: 150px;
}

.profile-card .profile-image__img {
    width: 10%;
    height: auto;
    border-radius: 50%;
    position: absolute;
    top: 30px;
    left: 30px;
}

.profile-card .profile-image__border {
    width: calc(10% + 20px);
    height: auto;
    position: absolute;
    top: 20px;
    left: 20px;
}
.profile-info {
    width: 85%;
    float: right;
    padding-left: 10px;
    box-sizing: border-box;
}
.profile-info span {
    text-transform: uppercase;
    color: #666;
    letter-spacing: 3px;
}
.profile-info h3 {
    margin: 10px 0;
    font-weight: 700;
    font-size: 1.5em;
    color: #222;
}
.profile-info p {
    line-height: 140%;
    color: #666;
}
</style>
