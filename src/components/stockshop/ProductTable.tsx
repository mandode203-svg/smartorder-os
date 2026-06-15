'use client';
import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function ProductTable({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const channel = supabase
      .channel('realtime products')
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: 'products' 
      }, (payload) => {
        // Logique de mise à jour simple : on recharge tout si changement
        // Dans une app de production, on ferait un merge des données
        console.log('Changement détecté !', payload);
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [supabase]);

  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b bg-gray-100">
          <th className="p-3">Produit</th>
          <th className="p-3">Stock</th>
          <th className="p-3">Prix</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id} className="border-b hover:bg-gray-50">
            <td className="p-3 font-medium">{p.name}</td>
            <td className="p-3">{p.stock_quantity}</td>
            <td className="p-3">{p.price} €</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
