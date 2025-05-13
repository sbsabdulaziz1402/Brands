<template>
    <div class="bg-[#F7FAFC]">
        <div class="p-4 flex gap-2">
          <UFormGroup class="flex-1" label="Ташкилот" name="Ташкилот">
            <CustomDropDown :items="organizations" unicId="customOrg" ></CustomDropDown>
          </UFormGroup>
          <UFormGroup label="Мижоз" name="Мижоз" class=" flex-1">
            <UInput placeholder="Мижоз" size="lg" />
          </UFormGroup>
          <UFormGroup class="flex-1" label="Звание" name="Звание">
            <CustomDropDown :items="ranks"  unicId="customRank" ></CustomDropDown>
          </UFormGroup>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const organizations = reactive([
  {
    "name": "Таможни",
    "id": 1
  },
  {
    "name": "ГАИ",
    "id": 2
  },
  {
    "name": "Прокуратура",
    "id": 3
  },
  {
    "name": "Миб",
    "id": 4
  },
  {
    "name": "Дхх",
    "id": 5
  },
  {
    "name": "Налог",
    "id": 6
  },
  {
    "name": "ППХ",
    "id": 7
  },
  {
    "name": "Мчс",
    "id": 8
  },
  {
    "name": "Милий гвардия",
    "id": 9
  }
])

const ranks = reactive([
  {
  "id": 1,
  "name": "рядовой"
  },{
  "id": 2,
  "name": "младший сержант"
  },{
  "id": 3,
  "name": "сержант"
  },{
  "id": 4,
  "name": "старший сержант"
  },{
  "id": 5,
  "name": "летенант"
  },{
  "id": 6,
  "name": "старший летенант"
  },{
  "id": 7,
  "name": "капитан"
  },{
  "id": 8,
  "name": "майор"
  },{
  "id": 9,
  "name": "под.полковник"
  },{
  "id": 10,
  "name": "полковник"
  }
])

</script>

<style>

</style>