<template>
  <button @click="(e) => toggleDark()" class="p-1">
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 "
      mode="out-in"
    >
      <Icon name="pixelarticons:cloud-moon" style="color: white" v-if="isDark" class="mt-2 w-8 h-8" />
      <Icon name="pixelarticons:cloud-sun" style="color: white" v-else-if="!isDark" class="mt-2 w-8 h-8" />
    </transition>
  </button>
</template>

<script setup>

import { isDark, toggleDark } from '~~/composables/useDark'
// Currently having to import the composable directly because Nuxt 3 auto import is not working
// https://github.com/nuxt/framework/issues/3924

</script>
