<template>
    <div class=" relative h-[40px] flex flex-col gap-2" :id="props.unicId" @click.stop>
        <div class="box-border bg-[#ffffff] rounded-md py-2 px-4 h-[40px] border border-[#DEE2E7] font-[14px] cursor-pointer"
            @click="toggleDropdown">
            {{ dropdownContent.name ? dropdownContent.name : 'танланг' }}
        </div>

        <transition
          enter-active-class="transition ease-out duration-150"
          enter-from-class="opacity-0 translate-y-1"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition ease-in duration-100"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-1"
        >
          <div v-show="isOpen" class="absolute rounded-md py-1 top-[110%] w-full z-10 bg-[#ffffff] border border-[#DEE2E7]">
              <ul class="flex flex-col p-1 gap-1 overflow-y-auto no-scrollbar max-h-[250px]">
                  <li v-for="(item, inx) in items" 
                      :key="inx"
                      @click="setDropdownValue(item, inx)"
                      class="">
                      <div class="hover:bg-[#E5F1FF] flex justify-between cursor-pointer py-2 px-4 rounded-md"
                          :class="dropdownContent.index == inx ? 'bg-[#E5F1FF]' : ''">
                          <div>
                              {{ item.name }}
                          </div>
                          <div v-if="dropdownContent.index == inx" class="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                  <path fill="#000" d="m10 15.17l9.192-9.191l1.414 1.414L10 17.999l-6.364-6.364l1.414-1.414z"/>
                              </svg>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

type DropdownItem = { id: number; name: string };
type DropdownContent = { name: string; id: number; index?: number };

const isOpen = ref(false);
const dropdownContent = ref<DropdownContent>({ name: '', id: 0, index: -1 });
const emit = defineEmits(['update:modelValue'])

const props = defineProps<{
  items: DropdownItem[];
  modelValue: DropdownContent;
  unicId: string;
}>();

const setDropdownValue = (item: DropdownItem, index: number) => {
  dropdownContent.value = { ...item, index };
  emit('update:modelValue', item);
  closeDropdown();
};

const toggleDropdown = (event: Event) => {
  event.stopPropagation();

  if (!isOpen.value) {
    // Сообщаем всем другим dropdown'ам закрыться
    window.dispatchEvent(new CustomEvent('dropdown-close-all'));
  }

  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

const handleGlobalClick = (event: MouseEvent) => {
  const component = document.getElementById(props.unicId);
  if (component && !component.contains(event.target as Node)) {
    closeDropdown();
  }
};

const handleGlobalDropdownClose = () => {
  closeDropdown();
};

onMounted(() => {
  document.addEventListener('click', handleGlobalClick);
  window.addEventListener('dropdown-close-all', handleGlobalDropdownClose);
  console.log(props)
  if(props.modelValue && props.modelValue.name.length>0) {
    dropdownContent.value = props.modelValue
  }
});

onUnmounted(() => {
  document.removeEventListener('click', handleGlobalClick);
  window.removeEventListener('dropdown-close-all', handleGlobalDropdownClose);
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>