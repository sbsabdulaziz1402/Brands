import type { Order } from '@/entities/order/model'

export const updateOrder = async (order: Order) => {
  const { saveToFirestore } = useFirestore();
  return await saveToFirestore('orders', order, order.customer.phone);
}

export const getOrderData = async (orderId: string) => {
  const { getCollectionData } = useFirestore();
  return await getCollectionData('orders')
}