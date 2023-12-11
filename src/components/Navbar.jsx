import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-20 px-4 flex justify-between items-center bg-green-600 shadow-md shadow-green-900 fixed">
        <Link to="/">
          <h2 className="text-5xl font-bold text-green-50">DasajtonDev</h2>
        </Link>
        <ul className="flex gap-8 text-xl font-medium ">
          <Link
            className="text-green-50 hover:text-green-900 transition-all"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-green-50 hover:text-green-900 transition-all"
            to="/documentation"
          >
            Documentation
          </Link>
          <Link
            className="text-green-50 hover:text-green-900 transition-all"
            to="portfolio"
          >
            Portfolio
          </Link>
        </ul>
      </nav>
      <div className="w-full h-20"></div>
    </>
  )
}

export default Navbar
