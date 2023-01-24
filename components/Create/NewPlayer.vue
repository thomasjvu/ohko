<template>
    <form
        @submit.prevent="createPlayer"
        class="flex flex-col font-fragment gap-2"
    >
        <label>
            Username
            <input
                v-model="username"
                type="text"
                class="w-full rounded text-black"
                ref="username"
                id="username"
                required
            />
            <p class="">
                Confirm Username:
                <span class="input-value">{{ username }}</span>
            </p>
        </label>
        <label>
            Email
            <input
                v-model="email"
                type="email"
                class="w-full rounded text-black"
                ref="email"
                id="email"
                required
            />
            <p class="">
                Confirm Email Address:
                <span class="input-value">{{ email }}</span>
            </p>
        </label>
        <label>
            Password
            <input
                v-model="password"
                type="password"
                class="w-full rounded text-black"
                ref="password"
                id="password"
                required
            />
        </label>
        <button
            id="submit-button"
            type="submit"
            class="bg-white dark:bg-black rounded text-black dark:text-white p-3 border dark:border-white"
        >
            Signup
        </button>
        <p ref="error"></p>
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
                    console.log('Congrats! You have been signed-up.')
                    window.location.replace('/login');
                })
                .catch((error) => {
                    console.error(
                        'Yikes! The form could not be submitted. Maybe this email address is already being used?'
                    )
                })
        },
        async formRequest() {
            return await $fetch('https://app.ohko.org/users', {
                method: 'POST',
                body: {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    role: '5c7daea1-e1b1-45f1-9e1b-b03eacd90adf',
                    avatar: 'a121da83-d975-4443-bc9b-26f21d2e3083'
                },
            })
        },
    },
}
</script>

<style>
</style>
