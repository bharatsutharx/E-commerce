import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  orderNumber?: string | null;
  product?: ProductWhereUniqueInput | null;
  status?: "Option1" | null;
  totalAmount?: number | null;
};
