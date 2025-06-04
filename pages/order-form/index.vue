<template>
  <div class="bg-[#F7FAFC] flex flex-col p-4 gap-4">
    <div class="grid gap-x-4 gap-y-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      <div>
        <label class="block text-sm font-medium mb-1">Телефон раками</label>
        <CustomInput v-model="order.customer.phone" 
        type="string" 
        mask="00 000 00 00" 
        placeholder="XX XXX XX XX" />
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Ташкилот</label>
        <CustomDropDown v-model="order.customer.org" 
        :items="organizations" 
        unicId="customOrg"/>
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Мижоз</label>
        <CustomInput v-model="order.customer.name" 
        type="string" 
        placeholder="Ф.И.Ш"  />
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Звание</label>
        <CustomDropDown v-model="order.customer.rank" 
        :items="ranks" 
        unicId="customRank"
         />
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Группа крови</label>
        <CustomDropDown v-model="order.customer.blood_group" :items="blood_groups" unicId="bloodGroup" />
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Пол</label>
        <CustomDropDown v-model="order.customer.gender" :items="genders" unicId="gender" />
      </div>
    </div>

    <div>
      <CustomInputFileCard unicId="customer-sizes" v-model="order.photo " />
    </div>

    <div>
      <CustomButton title="Сақлаш" @click="createOrder(order)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { organizations, ranks, blood_groups, genders } from '~/entities/order/constants';
import type { Customer, Order  } from '~/entities/order/model';
import { createOrder } from '@/features/order/createOrder';

const order = reactive<Order>({
  date: ((new Date()).toISOString().split('T')[0]),
  customer: {} as Customer,
  full_payed: false,
  deposite: 0,
  payed_sum: 0,
  photo: ''
})

</script>