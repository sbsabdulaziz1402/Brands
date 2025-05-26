import type { Order } from '@/entities/order/model'

export const createOrder = async (order: Order) => {
  const { saveToFirestore } = useFirestore();
  if(validateOrderData(order)) {
    await saveToFirestore('orders', order, order.customer.phone);
  }
}



const validateOrderData = (val: Order)=> {
  // document.getElementById('input-1')?.focus()
  return true
};
