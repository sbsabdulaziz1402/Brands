import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Order } from "~/entities/order/model";
import { getOrdersList } from "~/features/order/getOrdersList";

export const useOrderStore = defineStore('order', () => {
    const orders = ref<Order[]>([])
    const searchTerm = ref('')

    const fetchOrders = async () => {
        orders.value = await getOrdersList();
    }

    const filteredOrders = computed(() => {
      if (!searchTerm.value) return orders.value
      return orders.value.filter(order =>
        order.customer.name?.toLowerCase().includes(searchTerm.value.toLowerCase()) || order.customer.phone.includes(searchTerm.value.toLowerCase())
      )
    })

    const resultData = computed(() => {
        return filteredOrders.value.length > 0 ? filteredOrders.value : orders.value;
    })

    return {
        orders,
        fetchOrders,
        filteredOrders,
        resultData,
        searchTerm
    }
})