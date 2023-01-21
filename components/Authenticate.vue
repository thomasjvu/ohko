<template>
    <form @submit.prevent="login">
        <VAlert v-if="error" type="error" class="mb-4">
            Error: {{ error }}
        </VAlert>
        <div v-if="loading" class="flex items-center justify-center flex-1">
            <VLoading class="w-24 h-24 text-primary-600" />
        </div>
        <div class="space-y-4 text-2xl" v-if="!loading">
            <VInput
                class="text-input text-2xl"
                v-model="email"
                name="email"
                type="email"
                label="Email address"
                placeholder="demo@ohko.org"
                required
            />
            <VInput
                class="text-2xl"
                v-model="password"
                name="password"
                type="password"
                label="Password"
                required
            />
            <div class="flex items-center justify-end space-x-4">
                <!-- <VButton type="button" @click="loadDemoUser()">Load Demo User</VButton> -->
                <VButton
                    type="submit"
                    variant="primary"
                    :disabled="!email || !password"
                >
                    <span>Login</span>
                </VButton>
            </div>
        </div>
    </form>
</template>

<script setup>
import { Directus } from '@directus/sdk';

const directus = new Directus('https://app.ohko.org');
const { login } = useDirectusAuth()

const onSubmit = async () => {
  try {
    await login({ email: "", password: "" });
  } catch (e) {}
};

</script>

<style scoped>
.text-input {
    font-size: 4rem;
};

</style>
