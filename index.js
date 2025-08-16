import Navbar from '@/components/Navbar'
import OfferBar from '@/components/OfferBar'
import ProductSection from '@/components/ProductSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <OfferBar />
      <main className="p-4">
        <ProductSection title="Hot Snacks" />
        <ProductSection title="Sweet Snacks" />
      </main>
      <Footer />
    </div>
  )
}