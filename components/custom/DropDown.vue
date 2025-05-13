<template>
    <div class=" relative h-[40px] flex flex-col gap-2" :id="props.unicId" @click.stop>
        <div class="box-border bg-[#ffffff] rounded-md p-2 h-[40px] border-[1px] border-[#DEE2E7] font-[14px] cursor-pointer"
            @click="toggleDropdown()">
            {{ dropdownContent.name ? dropdownContent.name : 'Органы' }}
        </div>
        <div v-if="is_Open" class="absolute rounded-md top-[110%] w-full z-10 bg-[#ffffff] border-[1px] border-[#DEE2E7]">
            <ul class="flex flex-col gap-1 overflow-y-auto scrollbar-none max-h-[350px]">
                <li v-for="(item, inx) in items" 
                    :key="inx"
                    @click="setDropdownValue(item, inx)"
                    class="p-1">
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
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
type dropdownContentType = {
    name: string,
    id: number,
    index?: number
}

const is_Open = ref<boolean>(false);

const props = defineProps<{ items: { id: number; name: string }[], unicId: string }>();

const dropdownContent = ref<dropdownContentType>({name: '',
  id: 0,
  index: -1});

const setDropdownValue = (val : dropdownContentType, inx: number) => {
    is_Open.value = !is_Open.value;
    dropdownContent.value = {name: val.name, id: val.id, index: inx};   
}

const toggleDropdown = ()=> {
    is_Open.value = !is_Open.value;
    if(is_Open) {
        addOutSideClickEvent()
    }
}

function addOutSideClickEvent() {
    document.addEventListener('click', function(event) {
        const component = document.getElementById(props.unicId);
        console.log(component, event)
        if (component && !component.contains(event.target as Node)) {
            is_Open.value = false; 
            document.removeEventListener('click', ()=>{});
        }
    });
}

</script>