<template>
    <div class="transition-all duration-100 ease-in-out p-[3px] rounded-4xl border-1 border-[#DEE2E7]
                active:border-[#0D6EFD] active:border-2 active:p-[2px]">
        <div class=" h-[40px] rounded-4xl  cursor-pointer   bg-[#0D6EFD] border border-[#DEE2E7] 
        flex justify-center items-center">
            <div class="text-white text-lg text-bold">
                {{ props.title }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
}>()
</script>

<style>

</style>