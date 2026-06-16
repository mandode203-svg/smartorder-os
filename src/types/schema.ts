// ============================================================
// SmartOrder Business OS — Types TypeScript — Schema
// ============================================================

export type Currency = 'XOF' | 'XAF' | 'MAD' | 'GHS' | 'NGN' | 'KES' | 'USD' | 'EUR'
export type Country  = 'SN' | 'CI' | 'CM' | 'MA' | 'GH' | 'NG' | 'KE'
export type Plan     = 'starter' | 'pro' | 'enterprise'

export interface Tenant {
  id:         string
  name:       string
  slug:       string
  country:    Country
  currency:   Currency
  timezone:   string
  plan:       Plan
  is_active:  boolean
  created_at: string
  updated_at: string
}

export interface Product {
  id:             string
  tenant_id:      string
  name:           string
  sku:            string | null
  category:       string | null
  price:          number
  stock_quantity: number
  stock_alert:    number
  is_active:      boolean
  created_at:     string
  updated_at:     string
}

export interface Order {
  id:             string
  tenant_id:      string
  order_number:   string
  status:         string // 'pending' | 'confirmed' | ...
  customer_name:  string | null
  total_amount:   number
  created_at:     string
}

// Type Database pour Supabase
export type Database = {
  public: {
    Tables: {
      tenants: { Row: Tenant; Insert: any; Update: any }
      products: { Row: Product; Insert: any; Update: any }
      orders: { Row: Order; Insert: any; Update: any }
    }
  }
}