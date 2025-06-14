<template>
<div v-if="orderData" class="bg-[#F7FAFC] flex flex-col p-4 gap-4">
    <div class="grid gap-x-4 gap-y-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      <div>
        <label class="block text-sm font-medium mb-1">Телефон раками</label>
        <CustomInput v-model="orderData.customer.phone" 
        type="string" 
        mask="00 000 00 00" 
        placeholder="XX XXX XX XX" />
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Ташкилот</label>
        <CustomDropDown v-model="orderData.customer.org" 
        :items="organizations" 
        unicId="customOrg"/>
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Мижоз</label>
        <CustomInput v-model="orderData.customer.name" 
        type="string" 
        placeholder="Ф.И.Ш"  />
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Звание</label>
        <CustomDropDown v-model="orderData.customer.rank" 
        :items="ranks" 
        unicId="customRank"
         />
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Группа крови</label>
        <CustomDropDown v-model="orderData.customer.blood_group" :items="blood_groups" unicId="bloodGroup" />
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Пол</label>
        <CustomDropDown v-model="orderData.customer.gender" :items="genders" unicId="gender" />
      </div>
    </div>

    <div>
      <CustomInputFileCard unicId="customer-sizes" v-model="orderData.photo" />
    </div>
</div>
</template>

<script setup lang="ts">
import { getOrderData } from '~/features/order/updateOrder';
import { onMounted } from 'vue';
import { organizations, ranks, genders, blood_groups } from '~/entities/order/constants';
import type { Order } from '~/entities/order/model';
const route = useRoute();
const pageId = <String>route.params.id;
const orderData = ref<Order | null>(null);
onMounted(async ()=>{
    orderData.value = await getOrderData(pageId);
    console.log(orderData)
})
</script>