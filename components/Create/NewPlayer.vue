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
                class="w-full rounded text-neutral-900 dark:text-neutral-100 text-2xl"
                ref="username"
                id="username"
                required
            />
            <!-- <p class=""> -->
            <!--     Confirm Username: -->
            <!--     <span class="input-value">{{ username }}</span> -->
            <!-- </p> -->
        </label>
        <label>
            Email
            <input
                v-model="email"
                type="email"
                class="w-full rounded text-neutral-900 dark:text-neutral-100 text-2xl"
                ref="email"
                id="email"
                required
            />
            <!-- <p class=""> -->
            <!--     Confirm Email Address: -->
            <!--     <span class="input-value">{{ email }}</span> -->
            <!-- </p> -->
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
            class="bg-infrared rounded text-neutral-900 text-2xl p-3"
        >
            Signup
        </button>
            <p v-if="error" ref="error">{{error.response}}</p>
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
                    role: '39973430-ce48-4e97-b2d3-46efced08c7d',
                    avatar: '2f52a2ee-d0db-4392-998d-ceb795a110cf'
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

input:focus {
    outline: none;
}

</style>
