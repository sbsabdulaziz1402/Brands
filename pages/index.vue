<template>
  <div class="bg-[#F6F8FA] h-full px-1 py-2">
    <div class=" flex flex-wrap gap-2">
      <div v-for="(item, index) in ordersList" :key="item.id"
      class=" rounded-md border border-[#E2E2EA] bg-white max-w-[380px] w-full p-6 hover:border-[#41AD6D] flex flex-col gap-2">
        <div class="flex justify-between">
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
          <p class=" ">
            {{ item.customer.name }}
          </p>
        </div>
        <div>
          <img :src="item.photo" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getOrdersList } from '~/features/order/getOrdersList';
import type { Order } from '~/entities/order/model';
const ordersList = ref<Order[]>([])

onMounted(async ()=>{
  ordersList.value = await getOrdersList()
})


</script>

<style scoped>

</style>