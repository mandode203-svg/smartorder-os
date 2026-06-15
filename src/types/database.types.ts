export interface Tenant {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Product {
  id: string;
  tenant_id: string;
  name: string;
  sku: string | null;
  price: number;
  stock_quantity: number;
  created_at: string;
}

export interface Order {
  id: string;
  tenant_id: string;
  customer_name: string | null;
  total_amount: number;
  status: 'pending' | 'paid' | 'cancelled';
  created_at: string;
}