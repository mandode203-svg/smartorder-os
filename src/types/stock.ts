export interface Product {
  id: string;
  tenant_id: string;
  name: string;
  sku?: string;
  category_id?: string;
  price: number;
  stock_quantity: number;
}

export interface InventoryItem {
  id: string;
  product_id: string;
  warehouse_id: string;
  quantity: number;
}