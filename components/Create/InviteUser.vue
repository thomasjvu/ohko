<template>
    <form
        @submit.prevent="createUser"
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
                Confirm Email Address: <span class="input-value">{{ email }}</span>
            </p>
        </label>
        <button
            id="submit-button"
            type="submit"
            class="bg-white dark:bg-black rounded text-black dark:text-white p-3 border dark:border-white"
        >
            Signup
        </button>
    </form>
</template>

<script>
import { Directus } from '@directus/sdk'

const directus = new Directus('https://app.ohko.org/')
const users = directus.users

export default {
    data() {
        return {
            email: '',
        }
    },
      methods: {
        async createUser() {
            await users.invites.send(this.email, '80fd4803-2000-450b-90cc-d0a444c7a916') 
            
          window.location.replace('/signup');
        }
      }
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
