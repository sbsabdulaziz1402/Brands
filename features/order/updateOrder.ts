import type { Order } from '@/entities/order/model'

export const createOrder = async (order: Order) => {
  const { saveToFirestore } = useFirestore();
  return await saveToFirestore('orders', order, order.customer.phone);
}