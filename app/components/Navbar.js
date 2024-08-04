import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">VarnaArt</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link href="/shop" className="text-white hover:text-gray-300">Shop</Link></li>
          <li><Link href="/tutoring" className="text-white hover:text-gray-300">Tutoring</Link></li>
          <li><Link href="/gallery" className="text-white hover:text-gray-300">Gallery</Link></li>
        </ul>
      </div>
    </nav>
  )
}