<template>
</template>

<script setup lang="ts">
const { requestPasswordReset } = useDirectusAuth();
const router = useRouter();

const onSubmit = async () => {
  try {
    await requestPasswordReset({ email: "" });
  } catch (e) {}
};
</script>

<style>
</style>
