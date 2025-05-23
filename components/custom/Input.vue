<template>
  <div class="relative h-[40px] flex flex-col gap-1 w-full" :class="wrapperClass">
    <label v-if="label" :for="id" class="text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <div class="relative">
      <slot name="icon" />
      <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        ref="InputRef"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :class="[
          'w-full h-[40px] rounded-md bg-white border px-3 py-2 text-sm',
          hasError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500',
          icon ? 'pl-10' : '',
          inputClass
        ]"
      />
    </div>
    <p v-if="error" class="text-xs text-red-500">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import IMask from 'imask'
import { onMounted } from 'vue'
const props = defineProps<{
  modelValue?: string | number
  type?: string
  mask?: string
  placeholder?: string
  label?: string
  error?: string
  hasError?: boolean
  icon?: boolean
  id?: string
  wrapperClass?: string
  inputClass?: string
}>()
const InputRef = ref<HTMLInputElement | null>(null)

onMounted(()=>{
  if(InputRef.value && props.mask) {
    IMask(InputRef.value, {
      mask: props.mask,
    })
  }
})
</script>
