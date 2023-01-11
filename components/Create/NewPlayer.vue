<template>
    <form
        @submit.prevent="createPlayer"
        class="flex flex-col font-fragment gap-2"
    >
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
                    email: this.email,
                    password: this.password,
                    role: '80fd4803-2000-450b-90cc-d0a444c7a916',
                    avatar: 'f6e3a207-f7e5-46ac-b1f7-c743c9ffa153'
                },
            })
        },
    },
}
</script>

<style>
.input-value {
    color: #ff2147;
}

#submit-button {
    background: #ff2147;
}
#submit-button:hover {
    color: white;
    background: #797979;
}
</style>
