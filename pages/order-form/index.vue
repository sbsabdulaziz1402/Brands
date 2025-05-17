<template>
  <div class="bg-[#F7FAFC] flex flex-col p-4 gap-2">
    <div class="grid gap-x-4 gap-y-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      <UFormGroup label="Ташкилот" name="Ташкилот">
        <CustomDropDown v-model="order.customer.org" :items="organizations" unicId="customOrg" />
      </UFormGroup>

      <UFormGroup label="Мижоз" name="Мижоз">
        <UInput v-model="order.customer.name" placeholder="Ф.И.Ш" size="lg" />
      </UFormGroup>

      <UFormGroup label="Звание" name="Звание">
        <CustomDropDown v-model="order.customer.rank" :items="ranks" unicId="customRank" />
      </UFormGroup>

      <UFormGroup label="Группа крови" name="Группа крови">
        <CustomDropDown v-model="order.customer.blood_group" :items="blood_groups" unicId="bloodGroup" />
      </UFormGroup>

      <UFormGroup label="Пол" name="пол">
        <CustomDropDown v-model="order.customer.gender" :items="genders" unicId="gender" />
      </UFormGroup>

      <UFormGroup label="Телефон раками" name="Телефон раками">
        <UInput v-model="order.customer.phone" placeholder="+998 XX XXX XX XX" size="lg" />
      </UFormGroup>
    </div>
    <div>
      <UFormGroup label="Фото" name="Фото">
        <UInput type="file" @change="handleFileSelect" accept="image/*" size="lg" />
        <div v-if="previewUrl" class="mt-2">
          <img :src="previewUrl" alt="Preview" class="max-h-64 object-contain" />
        </div>
        <UButton class="mt-2" @click="uploadImage" :disabled="!selectedFile || loading">
          {{ loading ? 'Сжимаю...' : 'Сжать и сохранить фото' }}
        </UButton>
      </UFormGroup>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, reactive } from 'vue';
import { organizations, ranks, blood_groups, genders } from '~/entities/order/data';
import type { Customer, Order  } from '~/entities/order/types';
const order = reactive<Order>({
  date: new Date(),
  customer: {} as Customer,
  full_payed: false,
  deposite: 0,
  payed_sum: 0,
  photo: ''
})

const selectedFile = ref<File | null>(null);
const previewUrl = ref<string | null>(null);
const loading = ref(false);

function handleFileSelect(event: Event) {
  const target = event.target as HTMLInputElement;
  if (!target.files?.[0]) return;
  selectedFile.value = target.files[0];
  previewUrl.value = URL.createObjectURL(selectedFile.value);
}

async function uploadImage() {
  if (!selectedFile.value) return;
  loading.value = true;

  try {
    const formData = new FormData();
    formData.append('file', selectedFile.value);

    const res = await fetch('/api/compress-image', {
      method: 'POST',
      body: formData,
    });

    const blob = await res.blob();
    const compressedUrl = URL.createObjectURL(blob);

    order.photo = compressedUrl; // или сохранить blob в API или в базе

    // Можно сразу открыть/скачать
    const a = document.createElement('a');
    a.href = compressedUrl;
    a.download = 'compressed.jpg';
    a.click();
  } catch (error) {
    console.error('Ошибка при сжатии:', error);
  } finally {
    loading.value = false;
  }
}

</script>

<style>

</style>