import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ card }) => {
  return <div className="border-1 border-gray-400 p-4 rounded bg-white shadow-md hover:bg-green-100">
    <div className="flex justify-center"><Image
      src={card.thumbnail}
      alt="Vercel Logo"
      className="dark:invert"
      width={100}
      height={24}
      priority
    /></div>
    <div className="flex justify-center text-cyan-600">
      <Link href={`product/${card.id}`}>{card.title}</Link>
    </div>
    <div className="truncate text-sm">{card.description}</div>
  </div>
}

export default ProductCard