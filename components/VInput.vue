<template>
  <div>
    <VLabel v-if="label" :label="label" class="font-fragment text-2xl" />
    <div>
      <input
        :value="modelValue"
        :inputmode="type === 'number' ? 'decimal' : 'text'"
        :type="type"
        :name="name"
        :id="name"
        :class="['input', { 'text-right': type === 'number' }]"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>
<script setup>
defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  name: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
})
</script>
<style>

/* OG
.input {
  @apply block w-full dark:bg-gray-800 dark:text-white text-lg md:text-base border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 placeholder:text-gray-400 dark:placeholder:text-gray-600;
}
*/

.input {
    border-radius: 5px;
    background: #f8f8ff;
    color: black;
    width: 100%;
    font-size: 2rem;

    font-family: 'Fragment Mono', monospace;
}

</style>
