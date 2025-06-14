<template>
    <div class="rounded-md border border-[#E2E2EA] bg-white max-w-[380px] w-full h-full p-6 hover:border-[#41AD6D] flex flex-col gap-2">
        <NuxtLink :to="`/order-form/${props.item.id}`">

            <div class="flex justify-between">
                <p class=" text-bold text-[rgb(113,137,159)]">
                    Tелефон рақами:
                </p>
                <p>
                    {{ props.item.customer.phone }}
                </p>
            </div>
            <div  class="flex justify-between">
                <p class=" text-bold text-[#71899F]">
                    Мижоз:
                </p>
                <p>
                    {{ props.item.customer.name }}
                </p>
            </div>
            <div  class="flex justify-between">
                <p class=" text-bold text-[#71899F]">
                    Сана:
                </p>
                <p>
                    {{ props.item.date }}
                </p>
            </div>
        </NuxtLink>
            <div>
                <img :src="props.item.photo" ref="imageRef" @click="showFull = true">
            </div>
            <div v-if="showFull" class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center" @click="showFull = false">
                <img :src="item.photo" alt="Фото" class="max-w-full max-h-full" />
            </div>
    </div>
</template>

<script setup lang="ts">
import type { Order } from '~/entities/order/model';

const showFull = ref(false);
const props = defineProps<{
    item: Order
}>()
</script>