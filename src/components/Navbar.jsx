import { NavLink } from 'react-router-dom'
import HomeIcon from '../assets/icons/home.svg'

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" end className="w-10 h-10 rounded-lg items-center justify-center flex font-bold shadow-md">
      <img src={HomeIcon} alt="Home Icon" className="blue-gradient_text" />
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
            Projects
          </NavLink>
          <NavLink to="/experience" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
            Experience
          </NavLink>

        </nav>

    </header>
  )
}

export default Navbar