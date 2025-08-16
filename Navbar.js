import { useState } from 'react'
import { useCart } from '@/context/CartContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { cart } = useCart()

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 flex items-center justify-between p-4">
      <div className="flex items-center">
        <button onClick={() => setOpen(!open)} className="mr-4 text-2xl">≡</button>
        {open && (
          <div className="absolute top-12 left-4 bg-white border rounded shadow p-2">
            <a href="/" className="block">Home</a>
            <a href="#snacks" className="block">Snacks</a>
            <a href="#story" className="block">Our Story</a>
            <a href="#review" className="block">Review</a>
          </div>
        )}
        <input placeholder="Search" className="border p-1 rounded" />
      </div>
      <h1 className="font-bold text-xl">MyBrand</h1>
      <div>🛒 {cart.length}</div>
    </nav>
  )
}