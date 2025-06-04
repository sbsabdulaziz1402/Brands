<template>
  <div class="bg-[#F6F8FA] h-full px-1 py-2">
    <div class=" flex flex-wrap gap-2">
      <div v-for="(item, index) in ordersList" 
      :key="item.id"
      @click="handleClickOrder(item)"
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

          @click="showFull = true"
          alt="">
        </div>
        <div
          v-if="showFull"
          class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          @click="showFull = false"
        >
          <img :src="item.photo" alt="Фото" class="max-w-full max-h-full" />
        </div>
      </div>
    </div>
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

const openFullscreen = (index: number) => {
  // let el = (imageRef.value)[0]
  // if (el?.requestFullscreen) {
  //   el.requestFullscreen()
  // } else if ((el as any)?.webkitRequestFullscreen) {
  //   (el as any).webkitRequestFullscreen()
  // } else if ((el as any)?.msRequestFullscreen) {
  //   (el as any).msRequestFullscreen()
  // }
}

const handleClickOrder = (index: object) => {
  
}


</script>

<style scoped>

</style>