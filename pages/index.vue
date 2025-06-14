<template>
  <div class="bg-[#F6F8FA] h-full px-1 py-2 relative">
    <div class=" flex flex-wrap gap-2">
      <div v-for="(item, index) in ordersList"
      :key="item.id"
      @click="handleClickOrder(item)"
      class="max-w-[380px] w-full">

        <OrderCard :item="item" />
        <!-- <div class="flex justify-between">
          <p class=" text-bold text-[rgb(113,137,159)]">
            Tелефон рақами:
          </p>
          <p>
            {{ item.customer.phone }}
          </p>
        </div>
        <div  class="flex justify-between">
          <p class=" text-bold text-[#71899F]">
            Мижоз:
          </p>
          <p>
            {{ item.customer.name }}
          </p>
        </div>
        <div  class="flex justify-between">
          <p class=" text-bold text-[#71899F]">
            Сана:
          </p>
          <p>
            {{ item.date }}
          </p>
        </div>
        <div>
          <img :src="item.photo" ref="imageRef" 
          @click="showFull = true">
        </div>
        <div
          v-if="showFull"
          class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          @click="showFull = false"
        >
          <img :src="item.photo" alt="Фото" class="max-w-full max-h-full" />
        </div> -->
      </div>
    </div>
    <NuxtLink to="/order-form">
      <div class="absolute right-[40px] bottom-[40px] bg-[#0D6EFD] h-[40px] w-[40px] flex justify-center items-center rounded-full cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="#ffffff" d="M11.5 12.5V16q0 .213.144.356t.357.144t.356-.144T12.5 16v-3.5H16q.213 0 .356-.144t.144-.357t-.144-.356T16 11.5h-3.5V8q0-.213-.144-.356t-.357-.144t-.356.144T11.5 8v3.5H8q-.213 0-.356.144t-.144.357t.144.356T8 12.5zm.503 8.5q-1.867 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/>
        </svg>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getOrdersList } from '~/features/order/getOrdersList';
import type { Order } from '~/entities/order/model';
const showFull = ref(false);
const ordersList = ref<Order[]>([])
const imageRef = ref<HTMLImageElement[]>([])

onMounted(async ()=>{
  ordersList.value = await getOrdersList()
})

const handleClickOrder = (index: object) => {
  
}



</script>

<style scoped>

</style>