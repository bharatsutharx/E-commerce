import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  orderNumber: string | null;
  product?: Product | null;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
};
