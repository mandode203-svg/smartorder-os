import { Product } from '@/types/stock';

/**
 * Logique de base pour l'IA de réapprovisionnement
 * À terme, cette fonction appellera une API comme OpenAI ou une fonction Edge Supabase.
 */
export const analyzeStockNeeds = (products: Product[]) => {
  const threshold = 10; // Seuil critique
  
  return products.filter(product => product.stock_quantity < threshold).map(product => ({
    ...product,
    needed: threshold - product.stock_quantity,
    status: 'URGENT'
  }));
};