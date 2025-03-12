import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  sku?: SortOrder;
  stockQuantity?: SortOrder;
  updatedAt?: SortOrder;
};
