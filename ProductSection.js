import { useCart } from '@/context/CartContext'

export default function ProductSection({ title }) {
  const { addToCart } = useCart()
  const products = [
    { id: 1, name: 'Snack 1', price: 100 },
    { id: 2, name: 'Snack 2', price: 150 },
    { id: 3, name: 'Snack 3', price: 200 }
  ]

  return (
    <section className="my-8">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold">{title}</h2>
        <a href="#" className="text-blue-500">View All</a>
      </div>
      <div className="flex gap-4 overflow-x-scroll">
        {products.map(p => (
          <div key={p.id} className="min-w-[150px] border p-2 rounded shadow">
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)} className="bg-black text-white px-2 py-1 mt-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}