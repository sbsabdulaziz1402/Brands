<template>
    <div class="border-b border-[#E0E0E0] flex justify-center">
        <div class="max-w-[1180px] w-full py-[20px] px-[10px] flex justify-between">
            <div class="flex justify-between items-center gap-[6px]">
                <div>
                    <div class="bg-[#0D6EFD33] rounded-[10px] pr-1">
                        <div class="bg-[#0D6EFD] flex items-center justify-center rounded-[10px] p-[10px] ">
                            <svg width="18" height="22" viewBox="0 0 18 22" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.7">
                                    <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M4.29018 7.3562H3.30965C3.25911 7.3562 3.18417 7.4265 3.18127 7.47295L2.45892 19.1476L15.9548 19.1451L15.2253 7.47295C15.2225 7.42828 15.1457 7.3562 15.0969 7.3562H14.1164V9.32145C14.1164 9.86413 13.6765 10.3041 13.1338 10.3041C12.5911 10.3041 12.1512 9.86413 12.1512 9.32145V7.3562L6.25543 7.3562V9.32145C6.25543 9.86413 5.81549 10.3041 5.27281 10.3041C4.73012 10.3041 4.29018 9.86413 4.29018 9.32145V7.3562Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20329 0.478271C11.9153 0.478271 14.1164 2.6796 14.1164 5.38906L15.0969 5.39138C16.1835 5.39138 17.1192 6.27035 17.1867 7.35079L17.9244 19.1539C17.9921 20.2361 17.1698 21.1133 16.0865 21.1133H2.3201C1.23739 21.1133 0.41462 20.2344 0.482148 19.1539L1.21984 7.35079C1.28748 6.26864 2.22128 5.39138 3.30964 5.39138H4.29017C4.29017 2.67813 6.49304 0.478271 9.20329 0.478271ZM12.1511 5.39149C12.1511 3.76503 10.8299 2.44362 9.20328 2.44362C7.57781 2.44362 6.25541 3.76421 6.25541 5.38917L12.1511 5.39149ZM4.29018 7.35657H3.30965C3.2591 7.35657 3.18417 7.42687 3.18126 7.47332L2.45892 19.148L15.9548 19.1455L15.2253 7.47332C15.2225 7.42864 15.1457 7.35657 15.0969 7.35657H14.1164V9.32181C14.1164 9.8645 13.6765 10.3044 13.1338 10.3044C12.5911 10.3044 12.1512 9.8645 12.1512 9.32181V7.35657L6.25542 7.35657L6.25542 9.32181C6.25542 9.8645 5.81549 10.3044 5.2728 10.3044C4.73011 10.3044 4.29018 9.8645 4.29018 9.32181V7.35657Z" fill="white"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="flex items-center font-bold text-[21px] text-[#8CB7F5]">
                    Brand
                </div>
            </div>

            <div class="flex border-[#0D6EFD] border-2 rounded-lg p-1">
                <input class="h-[40px] rounded-r-[0px] focus:outline-none" type="text" v-model="orderStore.searchTerm" 
                placeholder="Search"></input>
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
import { useOrderStore } from '~/stores/order';
const orderStore = useOrderStore();
</script>