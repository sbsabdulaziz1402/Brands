<template>
    <div class="w-full h-full max-w-[360px] max-h-[380px]  bg-white cursor-pointer rounded-md border p-2 border-[#DEE2E7]">
        <div v-if="!selectedFile" class="rounded-md border bg-[#F7FAFC] border-[#DEE2E7] flex items-center justify-center"
            @click="openFileDialog()">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="300" viewBox="0 0 24 24">
                <path fill="#0D6EFD" d="M16.346 11.385V6.769h1v4.616zm-5.538 5.457q-.452-.269-.726-.734q-.274-.466-.274-1.031V6.769h1zM11.96 21q-2.271 0-3.846-1.595t-1.575-3.867v-8.73q0-1.587 1.09-2.697Q8.722 3 10.309 3t2.678 1.11t1.091 2.698V14h-1V6.789q-.006-1.166-.802-1.977T10.308 4q-1.163 0-1.966.821q-.804.821-.804 1.987v8.73q-.005 1.853 1.283 3.157Q10.11 20 11.961 20q.556 0 1.056-.124t.945-.372v1.11q-.468.2-.972.293q-.505.093-1.03.093m4.386-1v-2.616h-2.615v-1h2.615V13.77h1v2.615h2.616v1h-2.616V20z"/>
            </svg>
        </div>
        <div v-if="selectedFile" class=" overflow-hidden rounded-md border border-[#DEE2E7]">
            <img :src="compressedBlobUrl || previewUrl">
        </div>
        <input type="file" ref="fileInputRef" class=" hidden" accept="image/*" @change="handleFileSelect" >
    </div>
</template>

<script setup lang="ts">
// import { ref, onMounted, onUnmounted } from 'vue';
const props = defineProps<{
  unicId?: string;
  allowed?: object[];
}>();

const fileInputRef = ref<HTMLInputElement | null>(null)
const selectedFile = ref<File | null>(null)
const previewUrl = ref<string>('')
const compressedBlobUrl = ref<string | null>(null)
const emit = defineEmits(['update:modelValue'])


const openFileDialog = ()=>{
    fileInputRef.value?.click()
}

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files?.[0]) {
    selectedFile.value = target.files[0]
    previewUrl.value = URL.createObjectURL(selectedFile.value);
    compressedBlobUrl.value = null
    uploadAndCompress();
  }
}

const uploadAndCompress = async () => {
  if (!selectedFile.value) return

  const formData = new FormData()
  formData.append('file', selectedFile.value)

  try {
    const res = await fetch('/api/compress?quality=70&width=1200&format=webp', {
      method: 'POST',
      body: formData,
    })

    if (!res.ok) throw new Error('Ошибка сжатия')
    const data = await res.json();
    compressedBlobUrl.value = data.base64
    emit('update:modelValue', compressedBlobUrl);
  } catch (err) {
    alert('Ошибка при сжатии изображения')
  }
}

</script>