<template>
    <form @submit.prevent="createPlayer" class="flex flex-col font-fragment gap-20">
        <!-- Username -->
        <label class="uppercase">
            Username
            <input
                v-model="username"
                type="text"
                class="normal w-full rounded text-neutral-900 dark:text-neutral-100 text-2xl mt-10"
                maxlength="12"
                required
            />
        </label>
        <label class="uppercase">
            Email
            <input v-model="email" type="email" class="normal w-full rounded text-neutral-900 dark:text-neutral-100 text-2xl mt-10" required />
        </label>
        <!-- Password -->
        <label class="uppercase">
            Password
            <input v-model="password" type="password" class="normal w-full rounded text-neutral-900 dark:text-neutral-100 mt-10" required />
        </label>
        <!-- Submit -->
        <button id="submit-button" type="submit" class="font-VCR font-bold text-3xl text-neutral-900 uppercase bg-infrared rounded-lg my-10 p-5">
            Signup
        </button>
        <!-- Error Handling -->
        <p v-if="error" ref="error">{{ error.response }}</p>
    </form>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
        }
    },
    methods: {
        createPlayer() {
            this.formRequest()
                .then((result) => {
                    console.log('Congrats! You have been signed-up. Please sign in.')
                    window.location.replace('/login')
                })
                .catch((error) => {
                    console.error(error.response)
                })
        },
        async formRequest() {
            return await $fetch('https://app.ohko.org/users', {
                method: 'POST',
                body: {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    rank: "C-Class",
                    cover: 'c5e5a102-44bc-4995-bacc-f33aae0c0b25',
                    role: '39973430-ce48-4e97-b2d3-46efced08c7d',
                    avatar: '2f52a2ee-d0db-4392-998d-ceb795a110cf',
                },
            })
        },
    },
}
</script>

<style scoped>
input {
    background: rgba(0, 0, 0, 0);
    border: 0px;
    border-radius: 0;
    border-bottom: 1px solid #797979;
}
</style>
