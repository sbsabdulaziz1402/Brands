import type { Order } from "~/entities/order/model";
export const getOrdersList = async () => {
  const { getCollectionData } = useFirestore();
  return await getCollectionData('orders') as Order[];
}