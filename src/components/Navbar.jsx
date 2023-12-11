import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-20 px-4 flex justify-between items-center bg-slate-900 shadow-md shadow-slate-800 fixed">
        <Link to="/">
          <h2 className="text-5xl font-bold text-slate-200">DasajtonDev</h2>
        </Link>
        <ul className="flex gap-8 text-xl font-medium ">
          <Link className="text-slate-200 hover:text-slate-400" to="/">
            Home
          </Link>
          <Link
            className="text-slate-200 hover:text-slate-400"
            to="/documentation"
          >
            Documentation
          </Link>
          <Link className="text-slate-200 hover:text-slate-400" to="portfolio">
            Portfolio
          </Link>
        </ul>
      </nav>
      <div className="w-full h-20"></div>
    </>
  )
}

export default Navbar
