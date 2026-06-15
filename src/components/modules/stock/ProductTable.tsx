export const ProductTable = ({ products }: { products: Product[] }) => (
  <table className="w-full text-left border-collapse">
    <thead>
      <tr className="border-b">
        <th className="p-4">Produit</th>
        <th className="p-4">SKU</th>
        <th className="p-4">Stock</th>
        <th className="p-4">Prix</th>
      </tr>
    </thead>
    <tbody>
      {products.map((p) => (
        <tr key={p.id} className="border-b hover:bg-gray-50">
          <td className="p-4">{p.name}</td>
          <td className="p-4">{p.sku}</td>
          <td className="p-4">{p.stock_quantity}</td>
          <td className="p-4">{p.price}€</td>
        </tr>
      ))}
    </tbody>
  </table>
);