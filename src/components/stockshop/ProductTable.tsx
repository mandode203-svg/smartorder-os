import { Product } from '@/types/schema';

interface ProductTableProps {
  products: Product[];
}

export const ProductTable = ({ products }: ProductTableProps) => {
  if (!products || products.length === 0) {
    return <div className="p-4 text-gray-500">Aucun produit trouvé.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            <th className="px-6 py-3 border-b">Nom</th>
            <th className="px-6 py-3 border-b">SKU</th>
            <th className="px-6 py-3 border-b">Prix</th>
            <th className="px-6 py-3 border-b">Stock</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.sku || '-'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.price.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span className={product.stock_quantity <= product.stock_alert ? 'text-red-600 font-bold' : 'text-gray-900'}>
                  {product.stock_quantity}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};